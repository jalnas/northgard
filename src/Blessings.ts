import { ResourceMap } from "./Resources.js"

export type BlessingMap<T> = PropMap<BlessingType, T>
export type BlessingType = "Freya's Blessing" | "Baldr's Blessing" | "Jord's Blessing"

export const ImmediateBlessingResourceGains: BlessingMap<ResourceMap<number>> = {
	"Baldr's Blessing": { Happiness: 3 },
	"Jord's Blessing": { Iron: 10, Stone: 15 },
}
