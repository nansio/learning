define(function (require, exports, module) {
  console.log('moduleB')
  exports = {
    moduleName: 'b',
    func() {
      console.log('output from function in b module')
    }
  }
})
