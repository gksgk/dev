const path=require('path')

let filePath='C:\\Users\\91765\\OneDrive\\Desktop\\Dev\\node\\text.txt'

//extname() to get extention of file
console.log(path.extname(filePath))

//basename() to get full file name i.e file name with extention
console.log(path.basename(filePath))

console.log(__dirname)//gives current address of directery
console.log(__filename)//gives current address of directry with file name

//for more functionality
//https://nodejs.dev/learn/the-nodejs-path-module

