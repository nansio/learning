/**
 * Date --> Timestamp
 * 日期时间 => 时间戳
 */
// 第一种: 使用valueOf()
console.log('Date转换成Timestamp')
var timestamp = (new Date()).valueOf()
console.log(timestamp)

// 第二种: 使用getTime()
timestamp = (new Date()).getTime()
console.log(timestamp)

// 第三种: 将其转换成Number类型

timestamp = Number(new Date())
console.log(timestamp)

// 第四种: 只精确到秒 Date.parse()
var datee = new Date()
timestamp = Date.parse(datee)
console.log(timestamp)

/******************************************************************* */

/**
 * Timestamp --> Date
 * 时间戳 => 日期时间
 */

// 使用 new Date()初始化

console.log('Timestamp转换成Date')
var date = new Date(timestamp)
console.log(date.toLocaleString())
dateStr = new Date().toLocaleString()
console.log(dateStr);

/******************************************************************* */

/**
 * Date转换成String的几种格式
 */
console.log('Date转换成String的几个函数')
const now = new Date()
console.log('toString(): ' + now.toString())
console.log('toLocaleString(): ' + now.toLocaleString())
console.log('toUTCString(): ' + now.toUTCString())


