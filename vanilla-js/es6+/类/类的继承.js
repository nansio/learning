class Phone{
  constructor(brand, price) {
    this.brand = brand
    this.price = price
  }
  callsb() {
    console.log('Phone can call somebody')
  }
}

class SmartPhone extends Phone {
  constructor(brand, price, color, ram) {
    super(brand,price)
    this.color = color
    this.ram = ram
  }
  takePhoto() {
    console.log('SmartPhone can take photos')
  }
  surfOnline() {
    console.log('SmartPhone can surf online')
  }
  callsb() { // 重写父类方法 实际上是原型链的访问问题
    console.log('I can do video chat!')
  }
}

const huawei = new SmartPhone('Huawei', 5999, 'black', '8G')

console.log(huawei)
huawei.takePhoto()
huawei.surfOnline()
huawei.callsb()

