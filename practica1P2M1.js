var miVariable = "global";
console.log(miVariable);

function varAlcance(){
    var miVariable = "local";
    console.log(miVariable);
}

varAlcance();

console.log(miVariable);

{
    //aquie sigue siendo alcance global  pesr de las llaves, no es metodo ni clase
    var xx = 100;
    console.log(xx);
}

console.log(xx);

//una variable solo tiene visibilidad dentro de su contexto
console.log(" U una variable solo tiene visibilidad dentro de su contexto");
var varibale2 = "global2";
console.log(varibale2);

function daVariable(){
    console.log(varibale2);// DARA UNDEFINED
    var varibale2 = "local2";
    console.log(varibale2);
}
daVariable();
//no se puede volver a declarar algo declarado antes de ninguna manera solo var
//algo definido como contante no puede volver a ser asignado