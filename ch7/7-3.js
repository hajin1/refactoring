export class Order {
	constructor(data) {
		this.priority = data.priority;
	}

	isHighPriority() {
		return this.priority.higherThan('normal');
		// return 'high' === this.priority || 'rush' === this.priority;
	}
}

class Priority {
	#value;
	constructor(value) {
		if (Priority.legalValues().includes(value)) {
			this.#value = value;
		} else {
			// 생성자에서 error를 던지는 것은 보안에 취약해서 좋은 방법은 아니다
			throw new Error(`${value} is invalid for Priority`);
		}
	}

	get index() {
		return Priority.legalValues().indexOf(this.#index);
	}

	equals(other) {
		return this.#index === other.#index;
	}

	higherThan(other) {
		return this.#index > other.index;
	}

	static legalValues() {
		return ['low', 'normal', 'high', 'rush'];
	}
}

const orders = [new Order({ priority: 'normal' }), new Order({ priority: 'high' }), new Order({ priority: 'rush' })];

const highPriorityCount = orders.filter(o => o.isHighPriority()).length;
