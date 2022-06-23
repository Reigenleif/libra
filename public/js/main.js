import {setToken} from './tools.js'

// logout fn
function logout() {
    setToken('')
    window.location = '/login'
}

// adding logout button
const logoutButton = document.getElementById('logout')
if (!!logoutButton) {
    logoutButton.addEventListener('click',logout)
}