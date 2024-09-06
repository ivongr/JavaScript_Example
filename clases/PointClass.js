class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy);
        //Math.hypot devuelve la raíz cuadrada
    }
}

const p1 = new Point(8,5);
const p2 = new Point(10,58);
p1.displayName;
p1.distance;
p2.displayName;
p2.distance;

console.log(Point.displayName);
console.log(Point.distance(p1,p2));