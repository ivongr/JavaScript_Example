
function crearCuenta(inicial = 0) {
    let saldo = inicial;
  
    return {
      depositar: function(monto) {
        saldo += monto;
      },
      retirar: function(monto) {
        if (saldo >= monto) {
          saldo -= monto;
        } else {
          console.log("Saldo insuficiente");
        }
      },
      getSaldo: function() {
        return saldo;
      }
    };
  }
  
  // Crear cuenta con $100 inicial
  const cuenta = crearCuenta(100);
  
  // Depositar $50
  cuenta.depositar(50);
  console.log(cuenta.getSaldo()); // 150
  
  // Retirar $20
  cuenta.retirar(20);
  console.log(cuenta.getSaldo()); // 130
  