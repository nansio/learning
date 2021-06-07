function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.printName = function() {
    console.log(this.name)
  }
}

const person1 = new Person('Kath', 21, 'Nurse')

console.log(person1 instanceof Person)

console.log('--------------------------------------------------')

function Car(color, price) {
  this.color = color
  this.price = price
  if (typeof this.run !== 'function') {
    Car.prototype.run = function() {
      console.log('running...')
    }
  }
}

const redCar = new Car('red', 12222)
redCar.run()

const blueCar = new Car('blue', 222)
blueCar.run = 'cannot run'

console.log(blueCar.run)
// blueCar.run() // run not a function