const map = new Map()

map.set('name', 'zyn')
map.set('swim', function() {
  console.log('I can swim!')
})

map.set({
  description: '键可以是任何类型的数据，包括对象'
}, ['what', 'what', 'what'])

console.log(map.size)

console.log(map.get('name'))

console.log(map.entries())

console.log(map.keys())
console.log(map.values())

map.delete('swim')

console.log(map.has('swim'))
map.clear()
console.log((map.size))