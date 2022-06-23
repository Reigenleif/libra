const express = require("express")
const path = require('path')
const bodyParser = require("body-parser")
const booksRouter = require("./routers/books-router")
const loginRouter = require("./routers/login-router")
const mainRouter = require("./routers/main-router")
const borrowRouter = require('./routers/borrowed-router')

const app = express()

// make static directory to public
app.use(express.static(path.join(__dirname + "/public")))

// setting view engine
app.set("view engine","pug")
app.set("views",path.join(__dirname + "/views"))

// using bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// adding routers

app.use("/books",booksRouter)
app.use("/login",loginRouter)
app.use("/borrow",borrowRouter)



// !!redirecting for preventing 401 or 404 status
app.use("*",(req,res) => {
    res.redirect('/login')
})
app.listen(80)