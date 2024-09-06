import { JobMap } from "./Jobs.js"
import { ResourceMap } from "./Resources.js"
import { BuildingMap } from "./Buildings.js"
import { LoreMap } from "./Lore.js"
import { ClanType } from "./Clans.js"

export type State = {
	clan: ClanType
	resources: ResourceMap<number>
	workers: JobMap<number>
	buildings: BuildingMap<number>
	lore: LoreMap<boolean>
	feasts: number
}
