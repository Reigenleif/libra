const {writeFile} = require('fs')

function postBorrowed(data={}) {
    
    writeFile("./db/borrowed.json",JSON.stringify(data),(err)=> {
        if (err) {  
            console.log(err)
        } else {
            console.log("borrowed.json posted")
        }
    })
} 

module.exports = postBorrowed