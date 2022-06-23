export const BACKEND_URL = "http://localhost:80/"
export function setToken(token){
    localStorage.setItem('token',token)
}
export function getToken(){
    return localStorage.getItem('token') || ""
}

export function recreateNode(node) {
    const newNode = node.cloneNode(true)
    node.parentNode.replaceChild(newNode,node)
    return newNode
}