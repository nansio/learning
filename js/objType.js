/**
 * 数据类型判断的三种方法
 * 1. typeOf 123
 * 2. obj instanceOf(Array)
 * 3. Object.prototype.toString.call(arr) //推荐
 */
console.log(typeof 123)
console.log(typeof '123')
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof Math.abs)
console.log(typeof function(){})
// typeof 不能辨别null Array和通常意义上的object 都会返回obj
console.log(typeof null)
console.log(typeof [])
console.log(typeof {})
// 当数据使用new声明时 数据都会变成Object类型，不加new关键字时会被视作普通函数处理
console.log(typeof new Number(123))
console.log(typeof Number(123))
console.log(typeof new Boolean(123))
console.log(typeof Boolean(123))
console.log(typeof new String(123))
console.log(typeof String(123))

/**
 * instanceOf()运算符用于检测够赞函数的prototype属性是否出现在实例的原型链上
 */
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}

const auto = new Car('Honda', 'Accord', 1998)
console.log(auto instanceof(Car))
console.log(auto instanceof(Object))

/**
 * Object.prototype.toString() 可以精准的判断对象类型
 */

console.log(Object.prototype.toString.call([1,2,3]))
console.log(Object.prototype.toString.call({name: 'Chase'}))
console.log(Object.prototype.toString.call(null))
