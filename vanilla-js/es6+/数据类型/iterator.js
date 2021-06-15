const phone = {
  number: 12345675263,
  contacts: ['father', 'mother', 'sister', 'brother'],
  [Symbol.iterator]() {
    let index = 0
    let _this = this
    return {
      next: function() {
        if (index < _this.contacts.length) {
          return {
            value: _this.contacts[index++],
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
}

for(let i of phone) {
  console.log(i)
}