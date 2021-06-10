function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype = {
  constructor: Person,
  gender: 'male'
}

const person1 = new Person('jack', 21)

console.log(person1.__proto__)

console.log(Person.prototype)

const isPrototype = Person.prototype.isPrototypeOf(person1)
console.log(isPrototype)

console.log('name' in person1) 
console.log('gender' in person1)
