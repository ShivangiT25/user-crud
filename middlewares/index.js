const fs = require('fs')
function logReqRes(filename){
    return (req, res, next) =>{
        fs.appendFile(
            filename,
            `${Date.now()} ${req.method} ${req.url} ${req.ip}`, 
            (err, data)=>{
                next()
            }
        )
    }
}
module.exports ={
    logReqRes
}