const getBooks = require('../db/fn/getBooks')
const postBooks = require('../db/fn/postBooks')
const Login = require('./login')

class BooksClass {
    load() {
        this.data = getBooks()
    }

    save() {
        postBooks(this.data)
    }
    // method that return pointer to a book data
    getBookById (bookId) {
        const id = parseInt(bookId)
        for(let bookData of this.data) {
            if (bookData.id === id) {
                
                return bookData
            }
        }
        return false
    }
    // method that return all bookid
    getAllBookId() {
        return this.bookIds
    }

    // method to caculate and save remaining books
    // !! this method is too slow if used on every borrow/return action by user
    // calculateRemaining() {
    //     // getting all userids
    //     const loginIds = Login.getAllIds()

    //     // getting all borrowed data
    //     const borrowedData = [... Borrowed.data]

    //     // iterating all objects in borrowedData
    //     const booksBorrowed = {}
    //     for (let data of borrowedData) {
    //         const userBorrows = data.borrowed.split(';')

    //         // adding book borrowing number
    //         for (let bookId of userBorrows) {
    //             if (bookId in booksBorrowed) {
    //                 booksBorrowed[bookId] += 1
    //             } else if (bookId === ''){
    //                 continue
    //             } else {
    //                 booksBorrowed[bookId] = 1
    //             }
    //         }
    //     }

    //     // evaluating result
    //     for (let id in booksBorrowed) {
    //         const book = this.getBookById(id)
    //         book.remain = book.stock - booksBorrowed[id]
    //     }
    //     return
    // }

    constructor() {
        this.data = getBooks()
        this.bookIds = this.data.map(e => e.id)
    }
}

const Books = new BooksClass()

module.exports = Books