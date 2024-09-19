import { initLogin } from './modules5/initLogin.js';  // Asegúrate de que la ruta sea correcta

function addSubmitEventListener() {
    const form = document.getElementById('login-form'); // Captura el formulario

    // Usa el evento 'submit' para manejar el envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario
        initLogin(); // Llama a la función de inicio de sesión
    });
}

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    addSubmitEventListener(); // Llama a la función que añade el evento
});
