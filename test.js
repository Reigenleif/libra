const generateToken = require('./token/generate-token')
const parseToken = require("./token/parse-token")

const {performance} = require('perf_hooks')
for (let i = 0; i<1000;i++) {
    console.log(parseToken(generateToken('kirito','kirigaykazuto','::1')))
}
console.log(parseToken(generateToken('kirito','kirigaykazuto','::1')))