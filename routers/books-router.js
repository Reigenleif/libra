const {Router} = require('express')
const {getBookList,navigateByToken} = require("../controllers/books")

const router = Router()

router.use("/q",getBookList)

router.use("/",navigateByToken)

module.exports = router