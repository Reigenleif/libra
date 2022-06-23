const ing = require('./token-ing')
const [hk,ss] = [ing.PATTERN,ing.PATTERN2]
const [pl1,pl2] = [ing.PATTERN.length,ing.PATTERN2.length]
const Login = require('../models/login')
//parse token including id checks
function parseToken(tken) {
    const teen = tken||''
    const tkn = ing.str3To1Str(teen)
    let [ad,ar] = ["",""]
    if (tkn.length %3 === 0) {
        const bb = tkn.length/3
        
        for (let i =0;i<bb;i++){
            ad += tkn[3*i]
            ar += tkn[3*i + 1]   
        }
    } else if (tkn.length %3 === 1) {
        const bb = (tkn.length-1)/3
        for (let i =0;i<bb;i++){
            ad += tkn[3*i]
            ar += tkn[3*i + 1]   
        }
        ad += tkn[tkn.length-1]
    } else {
        return false
    }
    const ranet = ad + ar
    const v = ranet.length
    const p = v/pl2 % 2 !== 0
    const ddkk = p?v/pl2/2-0.5 :v/pl2/2
    let d = 0
    
    let ggnsd =""
    for (let i=0;i<ddkk;i++) {
        for(let j of ss) {
            ggnsd+= String.fromCharCode(ranet.charCodeAt(d) - j)
            d++
    
        }
        for(let j of ss) {
            ggnsd += String.fromCharCode(ranet.charCodeAt(d) - j)
            d++
            
        }
    }
    if(p) {
        for(let j of ss) {
            ggnsd += String.fromCharCode(ranet.charCodeAt(d) - j)
            d++
        }
    }
    
    while (true) {
        if (ggnsd[ggnsd.length-1] === ing.SPECCHAR) {
            ggnsd = ggnsd.substring(0,ggnsd.length-1)
        } else {
            break
        }

    }
    const dr = (ggnsd+"a").split(";")
    dr.pop()
    const kk3 = parseInt(dr.pop())
    const kk2 = parseInt(dr.pop())
    const kk1 = parseInt(dr.pop())
    
    const as = ggnsd.length / pl1
    
    const plo = as % 2 === 0 ? false : true
    let ppr = ""
    const aas = plo?as/pl1-0.5:as/pl1
    d=0
    
    for (let i = 0; i< aas;i++) {
        for (let j of hk) {
            ppr += String.fromCharCode(ggnsd.charCodeAt(d) - j)
            d++
        }
        for (let j of hk) {
            ppr += String.fromCharCode(ggnsd.charCodeAt(d) - j)
            d++
        }
    }
    if(plo) {
        for (let j of hk) {
            ppr += String.fromCharCode(ggnsd.charCodeAt(d) - j)
            d++
        }
    }
    const parsedToken = {id:ppr.substring(0,kk1),name:ppr.substring(kk1,kk1+kk2),ip:ppr.substring(kk1+kk2,kk1+kk2+kk3)}
    
    if (!Login.checkid(parsedToken.id)) {
        return false
    }
    return parsedToken
}

module.exports = parseToken