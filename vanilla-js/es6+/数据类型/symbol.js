let s = Symbol('描述信息')

console.log(s.toString())
console.log(s.valueOf())


let s2 = Symbol('a')
let s3 = Symbol('a')

console.log(s2 === s3)

let s4 =  Symbol.for('c')
let s5 = Symbol.for('c') // 根据 key 值找到 symbol 

console.log(s4 === s5)

let game = {
  name : '狼人杀',
  [Symbol('猎杀村民')] : function() {
    console.log('杀死一名村民')
  },
  [Symbol('自爆')] : function() {
    console.log('面对黑夜吧')
  }
}

console.log(game)
