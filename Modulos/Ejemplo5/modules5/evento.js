import { initLogin } from "./initLogin.js"

let button = document.getElementById("login-form");

button.addEventListener("submit",function(event){
    event.preventDefault(); 
 initLogin();
})

