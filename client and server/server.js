const http = require('http')
const fs = require('fs')
const _ = require('lodash')
const server = http.createServer((req, res)=>{
    // lodash use 
    const num=_.random(1,10)
    console.log(num)


    // create head for response
    res.setHeader('Content-Type', 'text/html')
    let path= './'
    switch (req.url) {
        case '/':
            path+='index.html'
            res.statusCode=200
            break;
        case '/about':
            path+='about.html'
            res.statusCode=200
            break;
        // redirect page 
        case '/about-us':
            res.statusCode=301
            res.setHeader('Location', '/about')
            res.end()
            break;
        // redirect page 
    
        default:
            path += '404.html'
            res.statusCode=404
            break;
    }
    //  sent response
    fs.readFile(path,(err,data) => {
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })
})
server.listen(3000, 'localhost', ()=>{
    console.log('listening for request on port 3000')
})