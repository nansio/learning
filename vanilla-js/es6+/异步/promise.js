// Promise.allSettled 与 Promise.all

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('商品数据 -1')
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('商品数据 -2')
    reject('出错啦！')
  }, 1000);
})

/*
区别：
allSettled 返回的 [[PromiseState]]总是 fulfilled [[PromiseResult]]数组展示各个Promise的结果
而 Promise.all只有在所有任务都成功的时候 [[PromiseState]] 才是 fulfilled, 在某一个reject的时候 [[PromiseResult]] 就是reject reason
*/

const res = Promise.allSettled([p1, p2])
console.log('res: ', res);

const result = Promise.all([p1, p2])
console.log('result: ', result);
