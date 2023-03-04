class Cliente {
 
    constructor(nombre, edad, correo) {
        this._nombre = nombre;
        this._edad = edad;
        this._correo = correo;
    }
 
    // Métodos set y ger para edad
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        if (edad > 18 && edad < 100) {
            this._edad = edad;
        }
    }
 
    // Métodos set y ger para nombre
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        if (nombre.trim().length > 0) {
            this._nombre = nombre;
        }
    }
 
 
    // Métodos set y ger para correo
    get correo() {
        return this._correo;
    }
    set correo(correo) {
        if (correo.length > 0) {
            this._correo = correo;
        }
    }
 
    // Método static
    imprimir(persona) {
        console.log(persona);
        this.#metodoExperimento();
    }
 
 
    #metodoExperimento() {
        console.log("Datos para conectarme a una BBDD");
    }
}
 
// Clase ClienteVIP
class ClienteVIP extends Cliente {
 
    constructor(nombre, edad, correo, tipo){
        super(nombre, edad, correo);
        this._tipo = tipo;
    }
 
    get tipo() {
        return this._tipo;
    }
 
    // Método static
    static imprimir(persona) {
        console.log("*****");
        console.log(persona);
        console.log("*****");
    }
 
}
 
const clientevip = new ClienteVIP("José", 22, "jose@gmail.com", "TOP");
const cliente = new Cliente("José", 22, "jose@gmail.com");
 
//console.log(clientevip);