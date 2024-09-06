import { BuildingType } from "./Buildings.js"
import { JobType } from "./Jobs.js"

type ActionType = "build" | "reassign_worker"

export type Action = {
	type: ActionType
	building?: BuildingType
	from?: JobType
	to?: JobType
}

export class Actions {
	static assignVillager(job: JobType): Action {
		return {
			type: "reassign_worker",
			from: "Villager",
			to: job,
		}
	}

	static build(building: BuildingType): Action {
		return {
			type: "build",
			building: building,
		}
	}
}
