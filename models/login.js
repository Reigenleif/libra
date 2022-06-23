const getLogin = require('../db/fn/getlogin')
const generateToken = require('../token/generate-token')

class LoginClass {
    load() {
        this.data = getLogin()
    }
    
    // method for matching login information
    match(id,password,ipaddres) {
        
        // searching for matching id
        for (let logInfo of this.data) {

            // if id mathes, match the password
            if (logInfo.id === id) {
                // !! add hashtype password
                if (logInfo.password === password) {
                    return generateToken(id,logInfo.name,ipaddres)
                }
                return false
            }
        }
        return false
    }
    // method to find id
    checkid(id) {
        for(let u of this.data) {
            if (u.id === id) {
                return true
            }
        }
        return false
    }

    // method to get all ids
    getAllIds() {
        return this.data.map(e => e.id)
    }

    constructor() {
        this.data = getLogin()
    }
}

const Login = new LoginClass()

module.exports = Login