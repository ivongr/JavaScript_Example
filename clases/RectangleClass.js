class Rectangle {

    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    get area(){
        return this.calcArea();
    }

    calcArea(){
        return this.height * this.width;
    }

    *getSides(){ //*detiene la ejecución
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}

const square = new Rectangle(10,10);

console.log(square.area);
console.log([...square.getSides()]);