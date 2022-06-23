const {Router} = require('express')
const {getLoginPage,invokeAuth} = require('../controllers/login')

const router = Router()

router.post("/auth",invokeAuth)

router.get("/",getLoginPage)

module.exports = router