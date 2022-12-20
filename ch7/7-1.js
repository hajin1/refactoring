class Organization {
	#data;
	#name;
	#country;
	constructor(data) {
		this.#data = data;
		this.#name = data.name;
		this.#country = data.country;
	}

	get name() {
		return this.#name;
	}
	get country() {
		return this.#country;
	}
	get rawData() {
		return { name: this.#name, country: this.#country }; // 클래스에서 업데이트된 데이터를 반환하고 싶다면.
		// return { ...this.#data }; // 얕은복사, lodash의 cloneDeep 활용하면 깊은복사 가능
	}
}
// const organization = { name: 'Acme Gooseberries', country: 'GB' };
const organization = new Organization({ name: 'Acme Gooseberries', country: 'GB' });

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
