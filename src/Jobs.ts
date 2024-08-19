import { ResourceMap } from "./Resources"

export type JobType =
	| "Villager"
	| "Loremaster"
	| "Brewer"
	| "Skald"
	| "Smith"
	| "Healer"
	| "Miner"
	| "Farmer"
	| "Hunter"
	| "Fisherman"
	| "Woodcutter"
	| "Merchant"
	| "Sailor"
	| "Scout"
	| "Mender"
// | "Thrall"
// | "Norn"

export type JobMap<T> = PropMap<JobType, T>

export const JobProduction: JobMap<ResourceMap<number>> = {
	Villager: { Food: 4 },
	Loremaster: { Lore: 3 },
	Brewer: { Happiness: 2 },
	Skald: { Happiness: 2, Fame: 0.175 },
	Smith: {},
	Healer: { Food: 4 },
	Miner: { Stone: 0.32, Iron: 0.32 }, // obviously it's not both at the same time, how do we solve it?
	Farmer: { Food: 5 },
	Hunter: { Food: 4.75 },
	Fisherman: { Food: 4.35 },
	Woodcutter: { Wood: 4 },
	Merchant: { Kröwns: 2 },
	Sailor: { Kröwns: 2, Lore: 0.8 },
	Scout: { Land: 3 }, // fixme: Land discovery rate changes depending on the distance to the town hall tile
	Mender: { Lore: 1 },
}
