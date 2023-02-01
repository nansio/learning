define(function (require, exports, module) {
  console.log('moduleA')
  exports = {
    moduleName: 'a',
    func() {
      console.log('output from function in a module')
    }
  }
})
