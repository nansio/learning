// in ES8

async function getData() {
  // async修饰的函数返回的是一个 Promise
  // return 'data'
  return new Promise(resolve => {
    resolve('data')
  })
}

let res = getData()
console.log('res: ', res);

async function main() {
  let res = await getData()
  console.log('res: ', res);
}

main()