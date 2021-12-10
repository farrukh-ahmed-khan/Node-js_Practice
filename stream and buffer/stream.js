const fs= require('fs')
const readstrem= fs.createReadStream('./blog1.txt',{encoding: 'utf8'})
const writestrem= fs.createWriteStream('./blog2.txt')
// readstrem.on('data', (chunk)=>{
//     console.log("=======new chunk==========")
//     console.log(chunk)
//     writestrem.write(chunk)
// })

// piping
readstrem.pipe(writestrem)