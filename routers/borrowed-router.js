const {Router} = require('express')
const {addBorrowedBook, removeBorrowedBook} = require('../controllers/borrowed')

const router = Router()

router.put('/',addBorrowedBook)

router.delete('/',removeBorrowedBook)

module.exports = router