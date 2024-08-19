import { JobMap } from "./Jobs"
import { ResourceMap } from "./Resources"
import { BuildingMap } from "./Buildings"
import { LoreMap } from "./Lore"

export type State = {
	resources: ResourceMap<number>
	workers: JobMap<number>
	buildings: BuildingMap<number>
	lore: LoreMap<boolean>
}
