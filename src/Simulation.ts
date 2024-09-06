import { Action } from "./Actions.js"
import { BuildingCosts, BuildingProductions, BuildingType } from "./Buildings.js"
import { GameClock } from "./GameClock.js"
import { JobProduction, JobType } from "./Jobs.js"
import { ResourceMap } from "./Resources.js"
import { State } from "./State.js"

export default class Simulation {
	#clock: GameClock
	#state: State
	#actions: Action[] = []

	static foodConsumption(population: number): number {
		return 0.01 * Math.pow(population, 2) + 1.35 * population - 0.75
	}

	constructor(initialState: State, actions: Action[], initialTime: number = 0) {
		this.#state = initialState
		this.#actions = actions
		this.#clock = new GameClock(initialTime)

		console.log("Initial state at T =", this.#clock.time)
		console.log(this.#state)
	}

	run() {
		console.log("\nRunning simulation steps:")
		while (this.#actions.length) {
			this.step()
		}
		console.log("\nEnd state at T =", this.#clock.time)
		console.log(this.#state)
	}

	immediatelyPayable(cost: ResourceMap<number>): boolean {
		// can we immediately afford the cost?
		// if every cost component is covered by our current resources, we can!
		return Object.entries(cost).every(([resource, amount]) => this.#state.resources[resource] >= amount)
	}

	deductResources(deductions: ResourceMap<number>): void {
		for (const [resource, amount] of Object.entries(deductions)) {
			this.#state.resources[resource] -= amount
		}
	}

	timeToAccrueResources(resources: ResourceMap<number>): number {
		const productions = this.getProductions()
		let longest_resource_accrual_time = -Infinity
		for (const [resource, amount] of Object.entries(resources)) {
			const missing_resources_of_type = amount - this.#state.resources[resource]
			if (missing_resources_of_type > 0 && productions[resource] <= 0) {
				throw new Error("Accrual goal unreachable")
			}
			const time_to_accrue_resource = missing_resources_of_type / productions[resource]
			// if this one takes longer than the previous one, replace it
			if (longest_resource_accrual_time < time_to_accrue_resource) {
				longest_resource_accrual_time = time_to_accrue_resource
			}
		}
		return longest_resource_accrual_time
	}

	accrueProductions(time: number): void {
		const productions = this.getProductions()
		for (const [resource, rate] of Object.entries(productions)) {
			this.#state.resources[resource] += rate * time
		}
	}

	addBuilding(building: BuildingType): void {
		if (!this.#state.buildings[building]) {
			this.#state.buildings[building] = 1
		} else {
			this.#state.buildings[building]++
		}
	}

	reassignWorker(from: JobType, to: JobType): void {
		this.removeWorker(from)
		this.addWorker(to)
	}

	addWorker(worker: JobType): void {
		if (!this.#state.workers[worker]) {
			this.#state.workers[worker] = 1
		} else {
			this.#state.workers[worker]++
		}
	}

	removeWorker(worker: JobType): void {
		if (this.#state.workers[worker] <= 0) {
			throw new Error(`Cannot remove worker that doesn't exist (${worker})`)
		}
		this.#state.workers[worker]--
	}

	step() {
		const action: Action = this.#actions.shift()
		console.log(this.#clock.time, action)

		switch (action.type) {
			case "build":
				const cost: ResourceMap<number> = BuildingCosts[action.building]

				if (!this.immediatelyPayable(cost)) {
					// if we can't immediately buy it, we need to figure out how long it will take to afford it
					// and then also figure out how much resources are generated or lost during the waiting time
					const time_until_payable = this.timeToAccrueResources(cost)
					this.accrueProductions(time_until_payable)
					this.#clock.increment(time_until_payable)
				}

				// at this point we can afford the action
				// to perform it we need to deduct the costs from the resources and add the building
				this.deductResources(cost)
				this.addBuilding(action.building)

				break

			case "reassign_worker":
				this.reassignWorker(action.from, action.to)
		}
	}

	getProductions(): ResourceMap<number> {
		return {
			Food: this.getFoodProduction(),
			Wood: this.getWoodProduction(),
			Kröwns: this.getKrownsProduction(),
			Lore: this.getLoreProduction(),
		}
	}

	getFoodProduction(): number {
		// food production is dependent on:
		// - number of villagers
		// - number of farmers
		// - number of hunters
		// - number of fishermen
		// - number of (idle) healers
		// ====
		// - is there a food silo _in the area_?
		// upgrades:
		// food silo upgraded
		// tools upgraded (not for villager)
		// lore Eradication gives food silo +10%
		// ====
		// are we currently feasting?
		// is it currently winter?

		const base_villager_production = this.#state.workers.Villager * JobProduction.Villager.Food || 0
		const base_farmer_production = this.#state.workers.Farmer * JobProduction.Farmer.Food || 0
		const base_hunter_production = this.#state.workers.Hunter * JobProduction.Hunter.Food || 0
		const base_fishermen_production = this.#state.workers.Fisherman * JobProduction.Fisherman.Food || 0
		const base_healer_production = this.#state.workers.Healer * JobProduction.Healer.Food || 0

		const production =
			base_villager_production +
			base_farmer_production +
			base_hunter_production +
			base_fishermen_production +
			base_healer_production

		// before modifiers we can just return the sum of these productions
		// obviously we need to account for winter, feasting, and lore bonuses later

		// consumption is dependent on total quantity of workers
		const total_worker_count = Object.values(this.#state.workers).reduce((sum, count) => sum + count, 0)
		const consumption = Simulation.foodConsumption(total_worker_count)

		return production - consumption
	}

	getWoodProduction(): number {
		// wood production is dependent on:
		// - number of wood cutters
		// - whether or not we have "Sharp Axes"
		// - Trading posts
		// - whether or not we are currently feasting
		// - altar of kings
		// - upgraded tools?
		// again feasting and winter
		// there is a firewood consumption somewhere also that I'm not sure about

		const base_wood_production = this.#state.workers.Woodcutter * JobProduction.Woodcutter.Wood || 0

		// modifiers in the game are _added_ rather than stacked
		// so two buffs of 20% production will be summed into one buff of 40% and then applied to the base production
		const wood_production_modifiers = this.#state.lore["Sharp Axes"] ? 1.2 : 1
		const modified_wood_production = base_wood_production * wood_production_modifiers

		return modified_wood_production
	}

	getKrownsProduction(): number {
		// krowns are produced by the town hall
		// merchants
		// sailors
		// feasting
		// altar of kings
		// and consumed by some building upkeep system

		const townhall_production = BuildingProductions["Town Hall"].Kröwns

		const sailor_production = this.#state.workers.Sailor * JobProduction.Sailor.Kröwns || 0
		const merchant_production = this.#state.workers.Merchant * JobProduction.Merchant.Kröwns || 0

		return townhall_production + sailor_production + merchant_production
	}

	getLoreProduction(): number {
		// let's pretend we don't generate any of this for now
		return 0
	}
}
