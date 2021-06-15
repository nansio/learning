const name = 'zzz', age = 21

const obj = {
  name: 'yyy',
  objAge: this.age,
  func: function() {
    console.log(this.name, '年龄：', this.age)
  }
}

// console.log(obj)
obj.func()