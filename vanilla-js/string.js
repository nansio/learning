
const hello = 'hel1lo theree2'

console.log('3st char is : ' + hello.charAt((3)))
console.log('3st charCode is : ' + hello.charCodeAt((3)))

console.log(hello.match('there'))
console.log(hello.match(/\d+/g))

const greeting = '  hello, man   '
console.log(greeting.replace('man','girl'))
console.log(greeting.search('ell'))

console.log(greeting.split('',3))

console.log(greeting.toLocaleLowerCase())
console.log(greeting.toLowerCase ())
console.log(greeting.toLocaleUpperCase ())
console.log(greeting.toUpperCase())

console.log(greeting.substr(0,1))
console.log(greeting.trim())