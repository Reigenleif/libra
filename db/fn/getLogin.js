const {readFileSync} = require('fs')

function getLogin() {
    const login = readFileSync("./db/login.json") || "[]"
    return JSON.parse(login)
}

module.exports = getLogin