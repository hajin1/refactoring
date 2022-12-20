export class Person {
	#name;
	#courses;
	constructor(name) {
		this.#name = name;
		this.#courses = [];
	}

	get name() {
		return this.#name;
	}

	get courses() {
		return [...this.#courses]; // 원본 배열을 복사하여 리턴하므로 원본에 접근할 수 없게 함
	}

	addCourse(course) {
		this.#courses.push(course);
	}

	removeCourse(course, runIfAbsent) {
		const index = this.#courses.indexOf(course);
		if (index === -1) {
			runIfAbsent();
			return;
		}
		this.#courses.splice(index, 1);
	}
}

export class Course {
	#name;
	#isAdvanced;
	constructor(name, isAdvanced) {
		this.#name = name;
		this.#isAdvanced = isAdvanced;
	}

	get name() {
		return this.#name;
	}

	get isAdvanced() {
		return this.#isAdvanced;
	}
}

const ellie = new Person('엘리');
// ellie.courses.push(new Course('리팩토링', true)); // course 배열을 조작하고 있음 💩

const course = new Course('리팩토링', true);
ellie.addCourse(course);
console.log(ellie.courses.length);
ellie.removeCourse(course, () => {
	console.log('해당 코스는 없다');
});
ellie.removeCourse(course, () => {
	console.log('해당 코스는 없다');
});
console.log(ellie.courses.length);
