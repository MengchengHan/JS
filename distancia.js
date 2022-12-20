class Punto {
    constructor(x, y) {
        if (x != null || y != null) {
            this.x = x;
            this.y = y;
        } else {
            this.x = 0;
            this.y = 0;
        }
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    cambiar(x, y){
        this.x = x;
        this.y = y;
    }

    copia(){
        return new Punto(this.x, this.y);
    }

    iguales(p){
        return (this.x == p.getX() && this.y == p.getY());
    }   

    suma(p){
        return new Punto(this.x + p.getX(), this.y + p.getY());
    } 

    obtenerDistancia(p){
        return Math.sqrt(
            Math.abs(this.x - p.getX())**2 +
            Math.abs(this.y - p.getY())**2 
        );
    }

    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }
}

const p = new Punto(-1, 0);
const q = new Punto(1, 1);

console.log(p.obtenerDistancia(q));
r = p.copia();
console.log(r.iguales(p));
console.log(r.toString());