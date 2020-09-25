/**
 * toString与valueOf
 */

class A {
  constructor(count) {
    this.count = count
  }
  toString() {
    return '我有这么多钱: ' + this.count
  }
}

let a = new A(199)
console.log(a)
console.log(a.toString())
console.log(a + 1)

/*  实现 a===1&&a===2&&a===3 为true */

let value = 1
let obj = { a: 0 }
Object.defineProperty(obj, 'a', {
  get() {
    return value++
  }
})
if (obj.a ===1 && obj.a ===2 && obj.a ===3){
  console.log('成功')
}
