// 入口文件

import m1 from './m1.js'
 
console.log(m1);
m1.getData()

import * as m2 from './m2.js'
console.log(m2)
m2.readBook()

document.querySelector('#btn').onclick = function() {
  import('./m3.js').then(m3 => {
    console.log('m3:', m3)
    m3.hello()
  })
}