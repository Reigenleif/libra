import {BACKEND_URL,getToken, recreateNode} from './tools.js'

// fn to toggle borrowed only/allbooks
function listToggler(){
    if (bookShowed === 'all-books') {
        mount(borrowedBooks)
        bookShowed = 'borrowed-books'
        document.getElementById('btn-toggle').innerText = 'Show All Books'
    } else if (bookShowed === 'borrowed-books') {
        mount(allBooks)
        bookShowed = 'all-books'
        document.getElementById('btn-toggle').innerText = 'Show Borrowed Books'
    }
}

// fn to mount books
function mount(books) {
    // clearing content
    const targetTbody = document.getElementById('book-list')
    targetTbody.innerHTML = ''

    // reading content
    let odd = true
    for (let row of books) {
        row.classList.remove('odd')
        row.classList.add(`${odd && 'odd'}`)
        targetTbody.appendChild(row)
        odd = !odd
    }
}

// fn to handler borrowing
async function borrowHandler(eid='btn-') {
    const bookid = eid.substring(4,eid.length)
    try {
        const data = await fetch(BACKEND_URL + "borrow",{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'    
                },
            body: JSON.stringify({
                token: getToken(),
                bookid: bookid
            })
        }).then(r => r.json()).catch(e => console.log(e))
        
        if(!data.pass) {
            return
        }

        window.location.reload()
    } catch (err) {
        console.log(err)
    }
}

// fn to handle return
async function unborrowHandler(bookid='') {
    try {
        const data = await fetch(BACKEND_URL + "borrow",{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'    
                },
            body: JSON.stringify({
                token: getToken(),
                bookid: bookid
            })
        }).then(r => r.json()).catch(e => console.log(e))
        
        if(!data.pass) {
            return
        }

        window.location.reload()
    } catch (err) {
        console.log(err)
    }
}

// main fn
// appending borrowfn to all borrow button
const btns = document.querySelectorAll('.btn-borrow')
for (let btn of btns) {
    btn.addEventListener('click', () => {
        borrowHandler(btn.id)
    })
}

// appending borrowed class to borrowed book rows
const borrowed = document.getElementById('none').innerText.split(';')
for (let id of borrowed) {
    if (id === ''){
        continue
    }
    document.getElementById(`row-${id}`).classList.add('borrowed')

    // adding fns to buttons
    const target =  document.getElementById(`btn-${id}`)
    target.innerHTML = "Return"
    const newTarget = recreateNode(target)
    newTarget.addEventListener('click', () => {
        unborrowHandler(id)
    })
}
// getting all books
const allBooks = document.querySelectorAll('.book-row')
const borrowedBooks = document.querySelectorAll('.book-row.borrowed')
mount(allBooks)

// appending toggler 
let bookShowed = 'all-books'
document.getElementById('btn-toggle').addEventListener('click', listToggler)