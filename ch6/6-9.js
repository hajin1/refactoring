export class Reading {
	#customer;
	#quantity;
	#month;
	#year;
	constructor({ customer, quantity, month, year }) {
		this.#customer = customer;
		this.#quantity = quantity;
		this.#month = month;
		this.#year = year;
	}
	get customer() {
		return this.#customer;
	}
	get quantity() {
		return this.#quantity;
	}
	get month() {
		return this.#month;
	}
	get year() {
		return this.#year;
	}
	get baseRate() {
		if (this.year === 2017 && this.month === 5) return 0.1;
		return 0.2;
	}
	get baseCharge() {
		return this.baseRate * this.quantity;
	}
	get taxThreshold() {
		return 0.1;
	}
	get taxableCharge() {
		Math.max(0, this.baseCharge - this.taxThreshold);
	}
}

const reading = new Reading({ customer: 'ivan', quantity: 10, month: 5, year: 2017 });

export function acquireReading() {
	return reading;
}
