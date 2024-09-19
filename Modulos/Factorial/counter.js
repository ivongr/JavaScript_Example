function crearContador(valorInicial = 0) {
    let contador = valorInicial;  // Esta variable está encapsulada dentro del closure

    return {
        incrementar: function() {
            contador++;  // Modifica el valor privado
        },
        disminuir: function() {
            contador--;  // Modifica el valor privado
        },
        get: function() {
            return { valor: contador };  // Retorna el valor actual dentro de un objeto
        }
    };
}

// Ejemplo de uso:
const contador1 = crearContador(5);  // Valor inicial de 5
contador1.incrementar();
console.log(contador1.get());  // Muestra { valor: 6 }

contador1.disminuir();
console.log(contador1.get());  // Muestra { valor: 5 }

const contador2 = crearContador();  // Valor inicial por defecto de 0
contador2.incrementar();
console.log(contador2.get());  // Muestra { valor: 1 }
