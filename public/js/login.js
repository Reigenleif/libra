import {BACKEND_URL,setToken} from "./tools.js";

// logic for submitting login
function submitHandler(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  loginHandler({
    id: username,
    password: password
  })
}

async function loginHandler(authInfo = { id: "", password: "" }) {
  let res, data;
  console.log(authInfo)
  try {
    res = await fetch(BACKEND_URL + "login/auth", {
      method: "POST",
      headers: {
    'content-type': 'application/json'    
    },
      body: JSON.stringify(authInfo),
    });
    data = await res.json();
    
  } catch (err) {
    console.log(err);
  }
  // block for wrong password
  if (!data.pass) {
    setErrMsg(data.errMsg);
  } else {
    setToken(data.token)
    window.location = "/books"
  }

}

function setErrMsg(err) {
    console.log(err)
    document.getElementById('err-block').innerText = err
}

// main
document.getElementById("login-form").addEventListener("submit", submitHandler);
