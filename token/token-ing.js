exports.PATTERN = [2,7,3,5,7,2]
exports.PATTERN2 = [1,3,3,4,2,1,4,6,7]
exports.SPECCHAR = String.fromCharCode(210)
DECASTAR = 100

// functions
exports.strTo3str = (str) => {
    let triple = ''
    for (let d in  str) {
        const a = str.charCodeAt(d).toString()
        const b = '0'.repeat(3-a.length) + a
        
        triple += String.fromCharCode(parseInt(b[0]) + DECASTAR,parseInt(b[1]) + DECASTAR, parseInt(b[2]) + DECASTAR)
    }
    return triple
}

exports.str3To1Str = (str='') => {
    let single = ''
    const repeatnum = str.length/3
    if (repeatnum%1 !== 0 ) {
        return ''
    }
    for (let r=0;r < repeatnum;r++) {
        const tex = (str.charCodeAt(3*r) - DECASTAR).toString() + (str.charCodeAt(3*r+1) - DECASTAR).toString() + (str.charCodeAt(3*r+2) - DECASTAR).toString()
        const xet = parseInt(tex)
        single += String.fromCharCode(xet)
    }
    return single
}