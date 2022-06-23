const {readFileSync} = require('fs')

function getBooks() {
    const books = readFileSync("./db/books.json") || "[]"
    return JSON.parse(books)
}

module.exports = getBooks