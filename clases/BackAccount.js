
class BankAccount {
    constructor(accountNumber, accountName, balance) {
      this.accountNumber = accountNumber;
      this.accountName = accountName;
      this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
      console.log(`Monto  $${amount} depositado a la cuenta ${this.accountNumber}.`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Monto a retirar$${amount}  ${this.accountNumber}.`);
      } else {
        console.log(`Insufientes fondos para retirar en el no.${this.accountNumber}.`);
      }
    }
  
    displayBalance() {
      console.log(`Cuenta con el nombre${this.accountNumber} balanza: $${this.balance}`);
    }
  }
  
 
  const account = new BankAccount('Prueba 1', 'Paola', 0);

  //
  account.displayBalance(); // Info cuenta 
  
  
  account.deposit(500); // Depositar cuenta 
  account.displayBalance(); // Info balanza
  
  account.withdraw(500); // Retirar
  account.displayBalance(); //Info balanza
  
  account.withdraw(500); // Retirar
 