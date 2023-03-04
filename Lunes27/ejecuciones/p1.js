function g(a, b, c) {
    return a *b *c;
}
console.log(g(1));

let mascotas = ["perro", "gato", "pez", "canario"];
mascotas= mascotas.filter(mascota => mascota.length >= 5);
console.log(mascotas);

console.log(typeof(null));
/*
class Base {
    constructor(){
        console.log("Base");
    }
}

class  Derivada extends Base {
    constructor(){
        //super();
        console.log("Derivada");
    }
}

class OtraDerivada extends Derivada{
    constructor(){
        console.log("Otra");
    }
}

//let objeto = new Derivada();
let ob1= new OtraDerivada();*/


var a;
var b = a === null;
console.log(b);


class Ope{
    static ave(arr){
        let res = 0;
        for (let valor of arr){
            res+=valor;
        }
        return res/arr.length;
    }
}

let suma = Ope.ave([5,10,15]);
console.log(suma);

(function f(f) {
    return typeof f();
})(function () {return "1";});
