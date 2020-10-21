const arr = [1,2,4,3,4,3,5,6]
console.log(new Set(arr))
const a = Array.from(new Set(arr))
console.log(a)

console.log(a.sort())

const pepole = [
  {name: 'eldest', age: 28},
  {name: 'yongest', age: 21},
  {name: 'average', age: 20}
]

console.log(pepole.sort((prev, next) => {
  return prev.age - next.age
}))

console.log(pepole.reverse())

const tmp = [1,2,3,4,5]
delete tmp[2]
console.log(tmp)
console.log(tmp.length)

const obj = {
  name: 'phoebe', age: 23, sex: 'female'
}
delete obj.sex
console.log(obj)

const shifted = tmp.shift()
console.log(shifted)
console.log(tmp)

console.log(tmp.unshift(9))
console.log(tmp)

console.log(tmp.push(3,7,32,21))
console.log(tmp)

console.log(tmp.valueOf())
console.log(tmp.toString())

const another = [0,0,1]
console.log(tmp.concat(another))

const x = 'I am '
const y = 'exhausted!'
console.log(x.concat(y))

console.log(tmp.join('@'))

const origin = [1,2,3,4,5]
console.log(origin.slice(1,3))

const chang = 'abcdefg'
console.log(chang.slice(0,3))

const sa = [1,2,2,3,4,5,5,7]
const deleted = sa.splice(2,1,0,1,2,3)
console.log(deleted)
console.log(sa)

const ma = [1,2,3,4,5]
const na = ma.map(item => item*2)
console.log(na)
console.log(ma)

console.log(ma.forEach(item => {
   item *= 2
}))

const obb = { name: 'ya', age:22}
for(let a in obj) {
  console.log(a)
}

const arc = [1,23,4,5,2]
for(let a in arc) {
  console.log(a)
}

const shun = [1,2,3,4,5,6,7,8,9,10]
const even = shun.filter( item=>{
  return item %2 === 0 
})

console.log(even)

console.log(shun.some(item=> item>3))
console.log(shun.every(item => item>3))

const th = shun.reduce((prev,cur) => prev+cur)
console.log(th)
const thr = shun.reduceRight((prev,cur) => prev+cur)
console.log(thr)

console.log(shun.indexOf(3))
console.log(shun.indexOf(2299))

const sto = 'asdfgkas'
console.log(sto.indexOf('s'))
console.log(sto.lastIndexOf('s'))

// const biarr = [[1,2,[3,4],5],6,7,[8,9]]
// const flatone = biarr.flatten(3)
// console.log(flatone)

console.log(Array.isArray(shun))

console.log(shun.copyWithin(2,0,2))

console.log(shun.find(item => item > 105))
