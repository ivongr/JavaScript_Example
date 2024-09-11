import { loginSession } from "./loginSession.js";
import { validateEmail } from "./validateEmail.js"
import { validatePassword } from "./validatePassword.js";



function initLogin(){
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
  
    // Validar el formato de la contraseña y correo
    if (!validatePassword(password)) {
      alert('La contraseña debe tener al menos 4 caracteres y maximo 16');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('El correo electrónico no es válido');
      return;
    }

    if (!loginSession(email, password)) {
        alert('Usuario o contraseña incorrectos');
        return;
      }
      // Iniciar sesión
      alert('¡Inicio de sesión exitoso!');

}
window.initLogin = initLogin;
export {initLogin}


