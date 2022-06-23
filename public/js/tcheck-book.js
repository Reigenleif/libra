// getting token
const token = localStorage.getItem('token')
console.log(token)
// sending request
// !! method too vurnerable
console.log(`./books/q?token=${token}`)
window.location.replace(`./books/q?token=${token}`)