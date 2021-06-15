let arr1 = [1,2,3,3,2,3,4,5,2,1]

let arr2 = [2,3,4,3,2,6]

// 1. 去重
console.log([...new Set(arr1)])

// 2. 交集

let intersection = [...new Set(arr1)].filter(item => new Set(arr2).has(item))
console.log(intersection)

// 3. 并集

let union = [...new Set([...arr1, ...arr2])]
console.log(union)

// 4. 差集
let diff = [...new Set(arr1)].filter(item => !(new Set(arr2).has(item))) // arr1中有 arr2中没有的
console.log(diff)