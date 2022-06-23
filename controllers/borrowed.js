const Borrowed = require("../models/borrowed");
const parseToken = require("../token/parse-token");

module.exports.addBorrowedBook = (req,res) => {
    const {token,bookid} = req.body
    const userData = parseToken(token)

    if (!userData) {
        res.send({
            pass: false,
            errMsg: "Failed: Bad Token"
        })
        return
    }

    const id = userData.id
    const status = Borrowed.addBorrow(id,bookid)

    if (!status) {
        res.send({
            pass: false,
            errMsg: "Failed: Already borrowed or something is wrong"
        })
    } else {
        res.send({
            pass: true,
            errMsg: null
        })
    }
}

module.exports.removeBorrowedBook = (req,res) => {
    const {token,bookid} = req.body
    const userData = parseToken(token)
    
    if (!userData) {
        res.send({
            pass: false,
            errMsg: "Failed: Bad Token"
        })
        return
    }

    const id = userData.id
    const status = Borrowed.delBorrow(id,bookid)

    if (!status) {
        res.send({
            pass: false,
            errMsg: "Failed: Book is not borrowed or something went wrong"
        })
    } else {
        res.send({
            pass: true,
            errMsg: null
        })
    }
}