const Login = require('../models/login')
const parseToken = require('../token/parse-token')

exports.getLoginPage = (req,res) => {
    res.render('login')
}

exports.invokeAuth = (req,res) => {
    const token = Login.match(req.body.id,req.body.password,req.ip)
    
    if (!token) {
        res.send({
            pass:false,
            errMsg: "Failed: Wrong Username or Password!",
            token: null
        })
        
    } else {
    res.send({
        pass:true,
        errMsg: null,
        token: token
        })
    }
}
