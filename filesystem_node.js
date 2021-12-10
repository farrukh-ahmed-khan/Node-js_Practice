// const fs = require('fs')

// reading file
// fs.readFile('./hello.txt', (err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString())
//     }
// })
// console.log('last line')

// writing file
// fs.writeFile('./hello.txt', 'hello farrukh', ()=>{
//     console.log("file was written")
// })

// directories
// for create if not exist folder
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log('folder created')
//         }
//     })
// }
// // for delete
// else{ 
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log("folder deleted")
//         }
//     })
// }