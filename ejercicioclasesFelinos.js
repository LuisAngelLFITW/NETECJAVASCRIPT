//Sistema crear felinos
//atibutos especie, origen,nombre y comida
//los felinos tienen clase que solo es de ellos que es cazar
//para felinos y gatos deseas ver y cambiar caracteristicas
//metodo que imprima caracteristicas de felno y gatito

class Felino{
    constructor(especie, origen, nombre, comida){
        this._especie= especie;
        this._origen = origen;
        this._nombre=nombre;
        this._comida=comida
    }
    // Métodos set y ger para especie
    get especie() {
        return this._especie;
    }
    set especie(especie) {
        this._especie = especie;
    }
 
    // Métodos set y ger para nombre
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    // Métodos set y ger para origen
    get origen() {
        return this._origen;
    }
    set origen(origen) {
        this._origen = origen;
    }
    // Métodos set y ger para comida
    get comida() {
        return this._comida;
    }
    set comida(comida) {
        this._comida = comida;
    }
    // Método static
    static imprimir(felino) {
        console.log(felino);
    }
    cazar() {
        console.log("Estoy cazando");
    }
}
 
// Clase Gato
class  Gato extends Felino {
 
    constructor(especie, origen, nombre, comida, juguete){
        super(especie, origen, nombre, comida);
        this._jugete = juguete;
    }
 
    // Métodos set y ger para juguete
    get juguete() {
        return this._juguete;
    }
    set juguete(juguete) {
        this._juguete = juguete;
    }

    cazar(){
        console.log("Los gatos no cazamos");
    }
}

let felino = new Felino('tigre','mexico', 'tono', 'carne');
Felino.imprimir(felino);
felino.cazar();

let gatito = new Gato('gato','mexico', 'Cat', 'atun', 'pelota');
Gato.imprimir(gatito);
gatito.cazar();
