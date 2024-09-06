export type ClanMap<T> = PropMap<ClanType, T>
export type ClanType =
	| "Bear"
	| "Boar"
	| "Dragon"
	| "Goat"
	| "Raven"
	| "Snake"
	| "Stag"
	| "Wolf"
	| "Horse"
	| "Kraken"
	| "Ox"
	| "Lynx"

export const ClanNames: ClanMap<string> = {
	Bear: "Bjarki",
	Boar: "Slidrugtanni",
	Dragon: "Nidhogg",
	Goat: "Heidrun",
	Raven: "Huginn and Muninn",
	Snake: "Sváfnir",
	Stag: "Eikthyrnir",
	Wolf: "Fenrir",
	Horse: "Svadilfari",
	Kraken: "Lyngbakr",
	Ox: "Himminbrjotir",
	Lynx: "Brundr and Kaelinn",
}
