const student = {
  name: 'Erica',
  year: 21,
  gender: 'male',
  _girlfriend: 'none',
  telling_truth: true
}

Object.defineProperty(student, 'name', {
  writable: false,
  enumerable: true,
  value: 'Zebra'
})

student.name = 'Richard'

console.log(student)

const descriptor = Object.getOwnPropertyDescriptor(student, 'name')

console.log(descriptor)

for(p in student) {
  console.log(student[p])
}

Object.defineProperties(student, {
  year: {
    enumerable: false,
    value: 38
  },
  gender: {
    configurable: false,
    enumerable: false
  }
})

console.log('----------------------------------')

for(p in student) {
  console.log(p, student[p])
}

console.log('----------------------------------')

Object.defineProperty(student, 'gf', {
  get: function() {
    return this._girlfriend
  },
  set: function(val) {
    this._girlfriend = val
    this.telling_truth = false
  }
})

console.log(student.gf)

student.gf = 'someone'

console.log('------------------------------------')
for(i in student) {
  console.log(i, ':', student[i])
}

Object.defineProperties(student, {
  _girlfriend: {
    writable: false,
    enumerable: true,
    configurable: false
  },
  telling_truth: {
    writable: false,
    enumerable: true,
    configurable: false
  }
})

// student.gf = 'prettygirl'
student._girlfriend = 'pretty pretty'
// 在将 _girlfriend设置为不可写入后，通过setter也不可更改

console.log('------------------------------------')

for(i in student) {
  console.log(i, ':', student[i])
}

console.log(Object.getOwnPropertyDescriptors(student))