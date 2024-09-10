class CalculatorClass{

    setValues(a,b){
        this.a = a;
        this.b = b;
        console.log(`El valor de a es => ${this.a}`);
        console.log(`El valor de b es => ${this.b}`);
    }

    constructor(a,b){
        this.a = a;
        this.b = b;
        
    }
}

const calculator_use_class = new CalculatorClass();

//declaracion de los valores
calculator_use_class.setValues(50, 1000);