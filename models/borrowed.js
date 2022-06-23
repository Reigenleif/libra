const getBorrowed = require('../db/fn/getBorrowed')
const postBorrowed = require('../db/fn/postBorrowed')
const Books = require('./books')

class BorrowedClass {
    load() {
        this.data = getBorrowed()
    }

    save() {
        postBorrowed(this.data)
    }
    // method to get pointer to user's data
    getUser(id) {
        for(let user of this.data) {
            if (user.id === id) {
                return user
            }
        }
        return false
    }

    // method to get user's borrowing list
    getBorrow(id,stred=false) {
        let data = this.getUser(id).borrowed || ''

        if (stred) {
            return data
        }

        return data.split(';')
    }

    // method to add bookid user's borrowing list
    addBorrow(id,bookid) {
        // validating bookid
        let isFound = false
        const BookIds = Books.getAllBookId()
        const intbookid = parseInt(bookid)
        for (let b of BookIds) {
            if (b === intbookid) {
                isFound = true
                break
            }
        }
        if(!isFound) {
            return false
        }

        // finding user's borrowing list by id (we can't use getBorrow method)
        for (let i in this.data) {
            if (this.data[i].id === id) {
                // finding bookid in user's borrowing list, if found, return false
                const borrowed = this.data[i].borrowed.split(';')
                if (borrowed.find(e => e === bookid)) {
                    return false
                } 

                // if not found, add book
                borrowed.push(bookid)
                this.data[i].borrowed = borrowed.join(";")
                return true
                
            } 
        }

        // if user is not registered here
        this.data.push({
            id: id,
            borrowed: bookid
        })
        return true
    }

    // method to remove bookid from user's borrowing list
    delBorrow(id,bookid) {
        let userData = this.getUser(id)
        let borrowed = userData.borrowed.split(';')
        for (let i in borrowed) {
            if (borrowed[i] === bookid) {
                borrowed.splice(i,1)
                userData.borrowed = borrowed.join(';')
                return true
            }
        }
        return false
    }
    

    constructor() {
        this.data = getBorrowed()
        setInterval(() => {
            this.save()
        },60000)
    }
}

const Borrowed = new BorrowedClass()

module.exports = Borrowed