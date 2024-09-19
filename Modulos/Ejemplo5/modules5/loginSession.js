import {listUsers} from "./user.js";
async function loginSession(email,password){
try{
    const users = await listUsers();
    let verify = !!users.find(element => element.email
        === email && element.password === password)
        return verify;
    } catch(error){
        return false;
    }

}

export {loginSession}