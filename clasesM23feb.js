class Cliente{
    constructor(nombre, edad, correo){
    this._nombre = nombre;
    this._edad = edad;
    this._correo = correo;
    }
    get edad(){
        return this._edad
    }
    set edad(edad){
        if (edad > 18 && edad <100){
            this._edad = edad;
        }
    }
    //metodos get y set para nombre
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        if(nombre.trim().length > 0){
            this._nombre= nombre;
        }
    }
    //metodos get y set para correo
    get correo(){
        return this._correo;
    }
    set correo(correo){
        this._correo=correo;
    }

    //metodo static
    static imprimir (persona){
        console.log(persona);
    }
    #metodoExperimento(){ //private de la clase cliente
        console.log("Expeimento");
    }
}

let cliente= new Cliente("luis", 25, "23");

Cliente.imprimir(cliente);

cliente.edad = 8;//aqui no deja modificar por conisciones del set
Cliente.imprimir(cliente);


//extends con herencia

class ClienteVIP extends Cliente {
    constructor(nombre, edad, correo, tipo){
        super(nombre, edad, correo);
        this._tipo = tipo;
    }
    get tipo(){
        return this._tipo;
    }
     //metodo static (sobrescrito)
     static imprimir (persona){
        console.log(persona);
        console.log("**********");
    }
}

const clientevip = new ClienteVIP("Jose", 25, "jose@", "top");

console.log(clientevip);

Cliente.imprimir(clientevip);
// o por heernxia es lo mismo
ClienteVIP.imprimir(clientevip);

//clientevip.metodoExperimento();
cliente.#metodoExperimento();
clientevip.#metodoExperimento();