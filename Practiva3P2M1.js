//funciones
//Una funcion  a la que se le pasan más parametros e los rgumentos que iene no pasas nada

//sI DENTO DE LA FUNCION SE UTILIZZA alguna varible que no esta deinida o no se le paso nunca, maracara error de indefinido, n o sabe que hacer con ell

//OPERADOR REST

/*function f(a,b,...elResto){
    console.log("a", a);
    console.log("b" + b);
    console.log("elResto", elResto);
}

f("lunes","martes","miercoles","jueves","viernes"); //regresa argumentos extra (resto) como un arreglo

*/


//MAS ARREGLOS
/*
var valores = [40, 90, 160, 215, 229];
var pv = valores.find(f); //a find de se le pasa una funcion

function f (valor){
    return valor > 200
}

console.log(pv);
*/

/*
var valores = [40, 90, 160, 215, 229];
var pv = valores.findIndex(fIndex); // se le pasa funcion

function fIndex(valor, index){
    console.log(valor, index) //itera hasta que se cumple la condicion
    return valor >100;
}

console.log(pv);

*/


//FUNCIONES ARROW


var f = function(a,b){
    return a+b
}

var g= (a,b) => a+b;
console.log(g(10,20));

//o
var h= (a,b) => {
    a+b;
}
console.log(h(10,20));


