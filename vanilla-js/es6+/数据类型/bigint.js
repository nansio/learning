// 大整型

let n = 5122n;
console.log('n: ', n, 'typeof n:', typeof n);

// BigInt函数 将整型、字符、转换成大整型

let small = 123
const coverted = BigInt(small)
console.log('coverted: ', coverted);

// 主要用于大数值的计算

let max = Number.MAX_SAFE_INTEGER
console.log('max: ', max);
console.log('max+1: ', max +1);
console.log('max+2: ', max +2);

console.log('bigint max: ', BigInt(max));
console.log('bigint max+1: ', BigInt(max) + BigInt(1));
console.log('bigint max+2: ', BigInt(max) + BigInt(2));
