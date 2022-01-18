const fs=require('fs')
const path=require('path')
//******FILES******** */
// //to read file
// let content=fs.readFileSync('text2.txt')
// console.log(''+content)

// //to write file used to write to a file
// //agar pehle se hi content hoga toh overwrite ho jayega

// fs.writeFileSync('text3.txt','data written to text3 file')

// //appending the file used to add more content to file
// fs.appendFileSync('text3.txt',' file appended')

//deleting a file used when we do not need that file anymore
//fs.unlinkSync('text3.txt')


//******Directory/Folder******** */

//creating a directory
//fs.mkdirSync('MyDir')

//removing a directory
//fs.rmdirSync('MyDir')

// let check=fs.existsSync('MyDir')
// console.log(check)
// //check existance of file or folder

// //to know stats of directory
// let stats=fs.lstatSync('text3.txt')
// //console.log(stats)
// //use of lstatSync() is to know weather given argument is file or folder
// //this is done using isFile() and isDirectory() methods
// console.log(stats.isDirectory())
// console.log(stats.isFile())
// //here we know
// //lekin bahut aaise situation aayenge jab hume nahi pata hoga

// //to know content of te folder
// let folderPath='C:\\Users\\91765\\OneDrive\\Desktop\\Dev\\js'

// let content=fs.readdirSync(folderPath)
// console.log(content)

//******************IMPORTANT********************** */
//copying file from src to dest

//s1- storing source file path
let srcFilePath='C:\\Users\\91765\\OneDrive\\Desktop\\Dev\\node\\dir1\\1.txt'

//s2-storing destination directory path
let destDirPath='C:\\Users\\91765\\OneDrive\\Desktop\\Dev\\node\\dir2\\'

//now we need to create destination path of the file similar to srcFilePath
//which will be done by joining destDirPath with file name
//s3- knowing/extracting file name
let tobeCopiedFileName=path.basename(srcFilePath)//returns 1.txt

//s4-creating destFilePath
let destFilePath=path.join(destDirPath,tobeCopiedFileName)

//s5-copying the file using copyFileSync(srcfilepath,destfilepath) method
fs.copyFileSync(srcFilePath,destFilePath);
