const {writeFile} = require('fs')

function postBooks(data={}) {
    writeFile("./db/books.json",JSON.stringify(data),(err)=> {
        if (err) {
            console.log(err)
        }
    })
} 

module.exports = postBooks