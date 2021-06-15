this.name = 'test'

let getName = () => {
  console.log(this.name)
}

const obj = {
  name: 'rich'
}

getName.call(obj)

function test({name, age, gender = 'boy'}) {
  console.log(`${name} is ${age} years old ${gender}`)
}

test({
  name: 'richard',
  age: 21
})