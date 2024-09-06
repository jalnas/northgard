export class GameClock {
	#time: number = 0

	constructor(initialTime: number) {
		this.#time = initialTime
	}

	get time(): number {
		return this.#time
	}

	increment(incrementDuration: number) {
		this.#time += incrementDuration
	}

	getSeason(): number {
		return 0
	}
}
