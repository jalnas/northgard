import { JobMap } from "./Jobs.js"
import { ResourceMap } from "./Resources.js"

export type BuildingMap<T> = PropMap<BuildingType, T>

type BaseBuildings =
	| "Town Hall"
	| "House"
	| "Scout Camp"
	| "Woodcutter's Lodge"
	| "Trading Post"
	| "Fisherman's Hut"
	| "Fields"
	| "Hunter's Lodge"
	| "Mine"
	| "Healer's Hut"
	| "Longship Dock"
	| "Lighthouse"
	| "Harbor"
	| "Carved Stone"
	| "Food Silo"
	| "Brewery"
	| "Sheepfold"
	| "Hall of Skalds"
	| "Mender's Hut"
	| "Marketplace"
	| "Forge"
	| "Altar of Kings"
	| "Training Camp"
	| "Axe Thrower Camp"
	| "Shield Bearer Camp"
	| "Defense Tower"
	| "Sacrificial Pyre"
	| "Völund's Forge"
	| "Fishery"
	| "Hörgr"
	| "Carved Statue"
	| "Skirmisher Camp"
	| "Dragonkin Altar"

type UpgradedBuildings =
	| "Upgraded Town Hall"
	| "Upgraded House"
	| "Upgraded Scout Camp"
	| "Upgraded Woodcutter's Lodge"
	| "Upgraded Trading Post"
	| "Upgraded Fisherman's Hut"
	| "Upgraded Fields"
	| "Upgraded Hunter's Lodge"
	| "Upgraded Mine"
	| "Upgraded Healer's Hut"
	| "Upgraded Longship Dock"
	| "Upgraded Lighthouse"
	| "Upgraded Harbor"
	| "Upgraded Food Silo"
	| "Upgraded Brewery"
	| "Upgraded Sheepfold"
	| "Upgraded Hall of Skalds"
	| "Upgraded Mender's Hut"
	| "Upgraded Marketplace"
	| "Upgraded Forge"
	| "Upgraded Altar of Kings"
	| "Upgraded Training Camp"
	| "Upgraded Axe Thrower Camp"
	| "Upgraded Shield Bearer Camp"
	| "Upgraded Defense Tower"
	| "Upgraded Sacrificial Pyre"
	| "Upgraded Völund's Forge"
	| "Upgraded Fishery"
	| "Upgraded Hörgr"
	| "Upgraded Carved Statue"
	| "Upgraded Skirmisher Camp"
	| "Upgraded Dragonkin Altar"

export type BuildingType = BaseBuildings | UpgradedBuildings

export const JobsPerBuilding: BuildingMap<JobMap<number>> = {
	"Scout Camp": { Scout: 2 },
	"Woodcutter's Lodge": { Woodcutter: 2 },
	"Trading Post": { Merchant: 2 },
	"Fisherman's Hut": { Fisherman: 2 },
	"Fields": { Farmer: 2 },
	"Hunter's Lodge": { Hunter: 2 },
	"Mine": { Miner: 2 },
	"Healer's Hut": { Healer: 2 },
	"Longship Dock": { Sailor: 2 },
	"Harbor": { Sailor: 2 },
	"Carved Stone": { Loremaster: 1 },
	"Brewery": { Brewer: 2 },
	"Hall of Skalds": { Skald: 2 },
	"Mender's Hut": { Mender: 2 },
	"Marketplace": { Merchant: 2 },
	"Forge": { Smith: 2 },
	"Upgraded Scout Camp": { Scout: 3 },
	"Upgraded Woodcutter's Lodge": { Woodcutter: 3 },
	"Upgraded Trading Post": { Merchant: 3 },
	"Upgraded Fisherman's Hut": { Fisherman: 3 },
	"Upgraded Fields": { Farmer: 3 },
	"Upgraded Hunter's Lodge": { Hunter: 3 },
	"Upgraded Mine": { Miner: 3 },
	"Upgraded Healer's Hut": { Healer: 3 },
	"Upgraded Longship Dock": { Sailor: 3 },
	"Upgraded Harbor": { Sailor: 3 },
	"Upgraded Brewery": { Brewer: 3 },
	"Upgraded Hall of Skalds": { Skald: 3 },
	"Upgraded Mender's Hut": { Mender: 3 },
	"Upgraded Marketplace": { Merchant: 3 },
	"Upgraded Forge": { Smith: 3 },
}

export const BuildingCosts: BuildingMap<ResourceMap<number>> = {
	"House": { Wood: 50, Kröwns: 10 },
	"Scout Camp": { Wood: 50 },
	"Woodcutter's Lodge": { Wood: 50 },
	"Upgraded Woodcutter's Lodge": { Wood: 50, Kröwns: 50, Stone: 10 },
	"Upgraded House": { Wood: 50, Kröwns: 50, Stone: 5 },
	"Upgraded Scout Camp": { Wood: 50, Kröwns: 50, Stone: 5 },
}

export const BuildingProductions: BuildingMap<ResourceMap<number>> = {
	"Town Hall": { Kröwns: 3 },
}

export const BuildingPopulationAllowances: BuildingMap<number> = {
	"Town Hall": 6,
	"House": 5,
	"Upgraded Town Hall": 8,
	"Upgraded House": 8,
}
