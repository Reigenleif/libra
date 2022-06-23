const ing = require('./token-ing')
const [hk,ss] = [ing.PATTERN,ing.PATTERN2]
const [pl1,pl2] = [ing.PATTERN.length,ing.PATTERN2.length]
function generateToken(id="",name="",ipaddres="") {
    const b = (id.length + name.length + ipaddres.length) % pl1
    const decryptedStr = b === 0 ? id + name + ipaddres : id + name + ipaddres + ing.SPECCHAR.repeat(pl1-b)
    const z = decryptedStr.length
    const plus = z/pl1 % 2 === 0 ? false : true
    const bt = plus? (z-pl1)/pl1 : z/pl1
    let [d,es] = [0,""]
    for (let i = 0; i<bt; i++){
        for(let j of hk) {
            es += String.fromCharCode(decryptedStr.charCodeAt(d) + j)
            d++
        }
        for(let j of hk) {
            es += String.fromCharCode(decryptedStr.charCodeAt(d) + j)
            d++
        }
    } 
    if (plus) {
        for(let j of hk) {
            es += String.fromCharCode(decryptedStr.charCodeAt(d) + j)
            d++
        }
    }

    d=0
    es+=`;${id.length};${name.length};${ipaddres.length};`
    const y = es.length%pl2
    const s2 = es + ing.SPECCHAR.repeat(pl2-y)
    const knu = s2.length
    const p2 = s2.length-pl2/pl2 === 0 ? false : true
    let se = ""
    const aa = p2?knu/pl2/2-1/2:knu/pl2/2
    for (let i = 0; i<aa; i++){
        for(let j of ss) {
            se += String.fromCharCode(s2.charCodeAt(d) + j)
            d++
    
        }
        for(let j of ss) {
            se += String.fromCharCode(s2.charCodeAt(d) + j)
            d++
            
        }
    } 
    if (p2) {
        for(let j of ss) {
            se += String.fromCharCode(s2.charCodeAt(d) + j)
            d++
        }
    }
    let ese = ""
    const md = se.length%2===0?se.length/2-1:(se.length/2)-1/2
    for (let i=0;i<md;i++) {
        ese += se[i] + se[md+1+i] + String.fromCharCode(se.charCodeAt(i) + se.charCodeAt(md+1+i))
    }
    if(se.length%2===1) {
        ese+=se[md]
    }
    return ing.strTo3str(ese)
}
module.exports = generateToken