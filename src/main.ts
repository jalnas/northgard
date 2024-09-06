import Simulation from "./Simulation.js"
import { Actions } from "./Actions.js"
import { State } from "./State.js"

const initialState: State = {
	clan: "Goat",
	resources: {
		Food: 100,
		Wood: 60,
		Kröwns: 100,
		Land: 1,
	},
	workers: {
		Villager: 4,
	},
	buildings: {
		"Town Hall": 1,
	},
	lore: {},
	feasts: 0,
}

const sim = new Simulation(initialState, [
	Actions.build("Woodcutter's Lodge"),
	Actions.assignVillager("Woodcutter"),
	Actions.assignVillager("Woodcutter"),
	Actions.build("House"),
	Actions.build("House"),
	Actions.build("House"),
	Actions.build("House"),
	Actions.build("House"),
	Actions.build("House"),
	Actions.build("House"),
])

sim.run()
