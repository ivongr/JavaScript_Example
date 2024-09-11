import {listUser} from "./users.js";
function loginSession(email,password){

    const users = listUser();
    let verify = !!users.find(element => element.email
        === email && element.password === password)
        if (verify){
            return true;
        }else{
            return false;
        }

}

export {loginSession}