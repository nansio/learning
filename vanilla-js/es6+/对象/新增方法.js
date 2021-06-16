console.log('-------------------------------- ES6 ----------------');

// 1. Object.is 判断两个值是否相等

console.log(Object.is(120, 120))
console.log(Object.is(120, 120.0))
console.log(Object.is(+0, -0))

console.log(Object.is(NaN, NaN))
console.log(NaN === NaN)

// 2. Object.assign

const config = {
  name: 'zyn',
  age: 21,
  gender: 'male'
}

const config1 = {
  hobbies: ['swim', 'running', 'badminton']
}

console.log(Object.assign(config, config1))

// 3. Object.setPrototypeOf 与 Object.getPrototypeof

const Person = {
  height: '180cm',
  weight: '75kg',
  gender: 'male'
}

const student = {
  name: 'xxx'
}

Object.setPrototypeOf(student, Person)

console.log(Object.getPrototypeOf(student))

console.log('-------------------------------- ES8 ----------------');

const obj = {
  name: 'test',
  friends: ['a','b','c'],
  what: function() {
    console.log('what what what');
  }
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(Object.getOwnPropertyDescriptors(obj));

console.log('-------------------------------- ES10 ----------------');

// Object.fromEntries([[]]) 二维数组转换成对象 与 Object.entries 互为逆运算

const resObj = Object.fromEntries([
  ['name', 'zyn'],
  ['age', 21],
  ['hobbies', ['badminton','swim']]
])
console.log(resObj)

const m = new Map()
m.set('key', 'value')

const mobj = Object.fromEntries(m)
console.log('mobj: ', mobj);
