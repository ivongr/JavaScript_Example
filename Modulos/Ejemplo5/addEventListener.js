import { initLogin } from "./modules5/initLogin.js";  // Ruta correcta

function addClickEventListener() {
    let form = document.getElementById("login-form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        initLogin();  // Inicia la función para iniciar sesión en el sitio web.
    });
}

export { addClickEventListener };
