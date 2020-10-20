const promise = new Promise((resolve, reject) => {
  console.log('promise created')
  resolve()
})
promise.then(()=>{
  console.log('promise resovled')
}).catch(()=>{
  console.log('promise rejected')
})

console.log('hello you')

function fetchDataAsync(){
  return new Promise((res,rej)=>{
    setTimeout(res,1000,'this message return by Promise')
  })
}

fetchDataAsync().then(data => {
  console.log(data);
})