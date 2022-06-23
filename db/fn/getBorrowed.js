const {readFileSync} = require('fs')

function getBorrowed() {
    const borrowed = readFileSync("./db/borrowed.json") || "[]"
    return JSON.parse(borrowed)
}

module.exports = getBorrowed