// 生成器 --- 异步解决方案

function getUser() {
  setTimeout(() => {
    let data = {
      name: '张三',
      uid: 'zhangsan'
    }
    iterator.next(data)
  }, 1000);
}

function getOrders(uid) {
  setTimeout(() => {
    let data = [
      {
        oid: '12344',
        cost: 89.2,
        payMethod: 'paypal'
      }
    ]
    iterator.next(data)
  }, 1000);
}
function getGoods(oid) {
  setTimeout(() => {
    let data = {
      name: 'AK47',
      price: 389.7
    }
    iterator.next(data)
  }, 1000);
}

function *getData() {
  let user = yield getUser()
  console.log(user)
  let orders = yield getOrders(user.uid)
  console.log(orders)
  let goods = yield getGoods(orders[0].oid)
  console.log(goods)
}

let iterator = getData()

iterator.next()