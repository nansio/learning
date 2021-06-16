// 1. 幂运算

console.log(2 ** 10);

// 2. 可选链 操作符 ?. ES11

function connect(config) {
  // const dbHost = config && config.db && config.db.host
  const dbHost = config?.db?.host // 上述两种方式都可以 可选链操作符太方便了
  console.log('dbHost: ', dbHost);
}

connect({
  db: {
    host: '127.0.0.1',
    username: 'host'
  },
  cache: {
    host: '192.1668.1.252',
    username: 'admin'
  }
})