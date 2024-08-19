export type LoreMap<T> = PropMap<LoreType, T>
export type LoreType =
	| "Sharp Axes"
	| "Colonization"
	| "Eradication"
	| "Recruitment"
	| "Medicine"
	| "Hearthstone"
	| "Shiny Happy People"
	| "Weaponsmith"
	| "Fur Coats"
	| "Defensive Strategy"
	| "Military Strategy"
	| "Feeling Safe"
	| "Legendary Heroes"
	| "Monster Slayer"
	| "Mining Efficiency"
	| "Shipbuilding"
	| "Coinage"
	| "Erudition"
	| "Carpentry Mastery"
	| "Negotiation"
	| "Trading Caravan"

export const LoreDescriptions: LoreMap<string> = {
	"Sharp Axes": "Your Woodcutters will produce 20% more Wood.",
	"Colonization": "Reduces the amount of Food necessary to colonize one zone by 30%.",
	"Eradication": "Food Silos gain a 10% Food production bonus. Also reduces Food Silo upgrade cost by 50%.",
	"Recruitment":
		"Permanently increases population growth speed by 25%. You gain an additional 5% during 4 months for each unit from your clan killed by an enemy clan or sacrificed (max +75%).",
	"Medicine": "Increases your Healer's healing speed by 50%.",
	"Hearthstone": "Reduces extra Firewood consumption during winter by 50% and reduce winter Food penalty by 20%.",
	"Shiny Happy People": "-20% required Happiness based on your population.",
	"Weaponsmith": "Increases all your military units' attack power by 20%.",
	"Fur Coats": "Your units no longer have reduced power during winter.",
	"Defensive Strategy": "Increases you civilians' attack and your Defense Towers' resistance by 30%.",
	"Military Strategy":
		"Military units gain +5% attack for each type of friendly military unit in the zone (max +25%).",
	"Feeling Safe": "Gain +3 Happiness if you have a Warchief and +1 Happiness per upgraded military camp.",
	"Legendary Heroes": "Improves your Warchief's attack and defense by 25%.",
	"Monster Slayer":
		"Improves your military units' attack by 10% against Draconic units and by 30% against other mystical creatures. Also increases  Military Experience gains by 50% for each mystical creature killed.",
	"Mining Efficiency": "Miners extract  ore from deposits 30% faster.",
	"Shipbuilding": "Unlocks the Lighthouse.Increases Sailors' resource production by 25%.",
	"Coinage": "Your Trade Routes produce +100% Kröwns.Your Merchants will produce 20% more Kröwns.",
	"Erudition": "Increases Loremaster production by 40%. Your next Carved Stone is free.",
	"Carpentry Mastery": "Reduces your buildings' upgrade costs by 20%.Reduces upkeep from upgraded buildings by 20%.",
	"Negotiation": "Reduces prices on the Marketplace by 50% and stock replenishment is 20% faster.",
	"Trading Caravan": "Trade Routes earn 20% more Kröwns. Relations with neutral factions improve 20% faster.",
}
