class Square{
    constructor(ctx,listId,length, x,y,color){
        this.ctx = ctx;
        this.listId = listId;
        this.length = length;
        this.x = x;
        this.y = y;
        this.color = color;
        this.name = "Square";
    }

    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect (this.x,this.y,this.length,this.length);
    }

    reportArea(){
     let listItem = document.createElement("li");
     listItem.textContent = `${this.name} area es ${this.length * this.length}px squared.`

     let list = document.getElementById(this.listId);
     list.appendChild(listItem);
    }

    reportPerimeter(){
        let listItem = document.createElement("li");
        listItem.textContent = `${this.name} perimetro es ${this.length * 4} px.`

        let list = documet.getElementById(this.listId);
        list.appendChild(listItem);
    }
}

export { Square };