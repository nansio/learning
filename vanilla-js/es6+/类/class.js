class Phone{
  // 静态成员只属于类 实例不能访问
  static creator = 'zyn'
  static checkValid() {
    console.log('this phone is legal')
  }
  constructor(brand, price) {
    this.brand = brand
    this.price = price
  }
  call() {
    console.log('我可以打电话！')
  }
}

const Huawei = new Phone('Huawei', 5999)
console.log(Huawei.brand, Huawei.price)

console.log(Huawei.creator)
console.log(Phone.creator)
Phone.checkValid()


// ES5实现
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.isSuspect = false

const Raven = new Person('Raven', 23)
console.log(Raven.isSuspect)