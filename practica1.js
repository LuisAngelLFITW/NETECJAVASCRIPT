function incrementar(empleado) {
    return empleado.salario*1.15;
}

/*console.log(typeof(incrementar));

var miObj = {

}
console.log(typeof(miObj));
console.log(miObj);
*/

//objeto emp estructura similar a estructura json
var emp = {
    nombre : 'Luis',
    edad : 25,
    departamento : "TI",
    presupuesto: 10000
};

function Empleado (nombre, edad, salario){ //en JS esto es una clase, un método es un objeto
    console.log("Estoy creando un empleado");
    this.nombre = nombre; //this asociado a ESTE objeto
    this.edad = edad;
    this.salario = salario;
}

var empleado1 = new Empleado("Luis", 25, 10000);

//se puede hacer algo asi en JS pero no es correcto, aunque el lenguaje lo permite
empleado1.telefono = 1234; 