Array.prototype.first = function() {
  return this[0]
}

Array.prototype.last = function() {
  return this[this.length - 1]
}

const arr = [1,2,3,4,5,6,7,8,9]

console.log(arr.first())
console.log(arr.last())
