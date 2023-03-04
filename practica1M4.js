//CLASE PERSONA
function Persona (){}

Persona.prototype.nombre = "Luis";
Persona.prototype.celular = "5556";
Persona.prototype.direccion = "Mexico";
Persona.prototype.edad = 25;

Persona.prototype.printEdad = function () {
    console.log(this.nombre + " tiene "+ this.edad + " años");
}
Persona.prototype.print = function (){
    console.log(this.nombre + " tiene el numero: " + this.celular + 
    " y vive en   "+ this.direccion);
}

var persona = new Persona();
persona.print();
persona.printEdad();

//CLASE EMPLEADO

function Empleado(){}

Empleado.prototype = new Persona(); //hereda de persona, es lo importante tambien para sbe del constructor
Empleado.prototype.constructor = Empleado;
Empleado.prototype.salario = 1000;
Empleado.prototype.edad = 20;

var empleado = new Empleado();
empleado.print();
empleado.printEdad();

//CLASE GERENTE

function Gerente(){}

Gerente.prototype = new Empleado();
Gerente.prototype.constructor = Gerente;
Gerente.prototype.departamento = "Tecnologia";

Gerente.prototype.calPresupuesto = function(){
    console.log(this.nombre+ " esta calculando el presupuesto del departamento " + this.departamento);
}

//var gerente = new Gerente();
//gerente.calPresupuesto();

//CLASE DIRECTOR

function Director(){}

Director.prototype = new Gerente();
Director.prototype.constructor = Director;
Director.prototype.desiciones = 3;
Director.prototype.metas = "Lograr un crecimiento semestrarl de 4%"
Director.prototype.numGerentes= 5;

Director.prototype.printMetas = function (){
    console.log(this.metas);
}

Director.prototype.printNumeroGerentes = function(){
    console.log(this.numGerentes);
}

Director.prototype.calPresupuesto = function(departamento, metaFinanciera){
    console.log("Estoy calculando el presupuesto para el area de: "+ departamento + " con la meta " + metaFinanciera);
}

var director = new Director ();
//director.printMetas();
//director.printNumeroGerentes();
//director.calPresupuesto(); //imprime undefined dado que llama al método de sobrescrito en director, apesar de herdarse de gerente


// CLASE DIRGENERAL
function Dirgneral() {}

Dirgneral.prototype = new Director();
Dirgneral.prototype.constructor= Dirgneral;
Dirgneral.prototype.numDirectores = 10;

Dirgneral.prototype.printNumeroDirectores = function(){
    console.log( "Como director general estoy a cargo de "+ this.numDirectores + " directores");
}

//dirGeneral = new Dirgneral();
//dirGeneral.printNumeroDirectores();

//CLASE SCRUMMASTER

function Scrummaster (){}
Scrummaster.prototype = new Empleado();
Scrummaster.prototype.constructor = Scrummaster;
Scrummaster.prototype.funciones = "Supervisar el tabajo del equipo";
Scrummaster.prototype.printFunciones = function (){
    console.log("Mi funcion es" + this.funciones);
}
//scrum= new Scrummaster();
//scrum.printFunciones();