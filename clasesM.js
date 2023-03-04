const cliente1 = {
    nombre: "Rogrigo",
    edad: 31,
    correo:"luis@gmail"
}

//propiedades que no  se instancian son propias de la clase

function  Persona(nombre, edad, correo){
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
}

const persona = new Persona("Luis", 25, "luis@gmail");

class Cliente{
    constructor(nombre, edad, correo){
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }
    //funcion estatica, metodo de clase
    static print(cliente){
        console.log(cliente);
    }
}

const cliente = new Cliente("Luis", 25, "luis@gmail");
console.log(cliente.nombre);

const clientex = new Cliente("Rodri", 31, "rodri@gmail");
const cliente2= new Cliente("max", 8, "max@gmail");
const cliente3 = new Cliente("jenni", 25, "jenni@gmail");

var clientes =[clientex, cliente2, cliente3 ];

clientes.forEach(c => console.log(c.correo));

//como si invocar estatico
Cliente.print(cliente3);

//como no
cliente3.print(cliente3); //error porque cliente3 no es clase

