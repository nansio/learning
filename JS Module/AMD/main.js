require(['./a', './b'], function(a, b) {
  console.log('moduleMain')
  console.log('a:', a)
  a.func()
  console.log('b:', b)
  b.func()
})
