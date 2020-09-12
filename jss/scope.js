/**
 * JS 变量作用域
 */

function testVar(){
    for(var i =0; i<10; i++) {
        console.log(i)
    }
    console.log(i) // i==>10
}
testLet()
testVar()
function testLet(){
    for(let i=0; i<10; i++){
        console.log(i)
    }
    console.log(typeof(i)) // i==>undefined
}

function add(num1, num2){
    sum = num1 + num2
    return sum
}
