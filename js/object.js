Array.prototype.valueOf = function() {
  return 'tmp'
}
const arr = [1,2,3]

console.log(arr.valueOf())

Array.prototype.toString = function () {
  return 'to...string...'
}

console.log(arr.toString())
console.log(arr.toLocaleString())

console.log(Array.prototype.isPrototypeOf(arr));
console.log(Array.prototype.isPrototypeOf(Object.setPrototypeOf(arr,String.prototype)));
console.log(String.prototype.isPrototypeOf(arr));

let obj = {}
obj.prop1 = 'val1'
obj.constructor.prototype.prop2 = 'val2'
console.log(obj.hasOwnProperty('prop1'));
console.log(obj.hasOwnProperty('prop2'));

const obn = { name: 'Alvera'}
console.log(Object.getOwnPropertyDescriptor(obn,'name'));
console.log(obn.propertyIsEnumerable('name'))

Object.defineProperty(obn,'name',{enumerable: false, writable: false, configurable: false})

console.log(Object.getOwnPropertyDescriptor(obn,'name'))
obn.name = 'anothter'
console.log(obn.name)

for(let i in obn) {
  console.log('enumberable: ', obn[i]);
}
