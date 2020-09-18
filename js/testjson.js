var obj = {
    name: 'zyn',
    sisters: [
        {name:'zyc', age:28},
        {nam:'zxf', age:25},
        {name:'zhh', age:24}
    ],
    age:23,
    // toJSON: function(){
    //     return this.name+this.sisters.toString()+this.age
    // }
}
var jsonText = JSON.stringify(obj,['name','age'],4)
// var jsonText = JSON.stringify(obj)
console.log(jsonText)

var book = {
    title: "Professional Javascript",
    'authors': [
        "Nicholas C. Zakas"
    ],
    edition:3,
    releaseDate: new Date(2011,11,1)
}
var bookText = JSON.stringify(book)
// var bookcopy = JSON.parse(bookText)
// console.log(bookcopy)
var bookcopy = JSON.parse(bookText,(key,value)=>{
    if(key==='releaseDate'){
        return new Date(value)
    }
    return value
})
console.log(bookcopy.releaseDate.getDay())