class Person {
	#lastname;
	#firstname;

	constructor(firstName, lastName) {
		this.#firstname = firstName;
		this.#lastname = this.#lastname;
	}
	get firstName() {
		return this.#firstname;
	}
	get lastName() {
		return this.#lastname;
	}
}

let defaultOwner = new Person('마틴', '파울러');

export function getDefaultOwner() {
	return defaultOwner;
}
