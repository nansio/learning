class Girl {
  // 共有属性
  name;
  // 私有属性
  #age;
  #weight;
  constructor(name, age, weight) {
    this.name = name
    this.#age = age
    this.#weight = weight
  }
  intro() {
    console.log(`${this.name} is ${this.#age} years young, and weight ${this.#weight} kg!`)
  }
}

const myGF = new Girl('beauty', 18, 50)
myGF.intro()

console.log(myGF.#age) // 这个行会报错 因为访问了私有属性