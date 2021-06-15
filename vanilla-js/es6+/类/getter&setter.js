class Phone {
  constructor(brand, price) {
    this.brand = brand
    this.price = price
  }
  get price() {
    console.log('price prop being read')
    return 'free'
  }
  set price(val) {
    // price = val
    console.log('price prop being modified')
  }
}

const Vivo = new Phone()
console.log(Vivo.price)

Vivo.price = 3999