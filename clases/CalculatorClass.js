class CalculatorClass{

    setValues(a,b){
        this.a = a;
        this.b = b;
        console.log(`El valor de a es => ${this.a}`);
        console.log(`El valor de b es => ${this.b}`);
    }

    constructor(){
        this.a = 0;
        this.b = 0;
        console.log("Se genero la instancia de CalculatorClss")
    }
}

const calculator_use_class = new CalculatorClass();

//declaracion de los valores
calculator_use_class.setValues(50, 1000);