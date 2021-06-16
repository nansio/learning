// 1. Array.prototype.flat() 数组的扁平化

const arr = [1, 2, 3, [4, 5]]
console.log(arr.flat()) // 参数为深度 depth 默认为1

const arr3 = [1,2,3,[4,5,[6,7,8]]]
console.log(arr3.flat(3));

// 2. Array.prototype.flatMap() 和 Array.prototype.map 的区别就是多了一个深度为 1 的 flat操作 元素操作返回要是数组

console.log([1,2,3,4,5].flatMap(item => [item*10, item*10+1]))