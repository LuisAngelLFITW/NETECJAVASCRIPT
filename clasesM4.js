// SET

//PERMITE GUARDAR VALORES UNICOS DE CUALQUIER TIPO INCLUYENDO TIPOS PRIMITIVOS O REFERENCIAS
/* A OBJETOS

SI UN OBJETO ITERABLE ES PASADO COMO ARGUMENTO A SU CONSTRUCTOR, TODOS LOS ELEMENTOS DEL
OBJETO ITERABLE, SE AGREGARAN AL SET

UN SET NO PUJEDE TENER REPETICIONES

SE PUEDE IETERAR EEN SUS ELEMENTOS, POR ORDEN DE INSERCION

*/

let ss = new Set();

ss.add(1);
ss.add(5);
ss.add("Rodrig");

console,console.log(ss);

let arreglo = [1,2,3,4,5,5,5,5]; //los 5 adicionales no se incluiran, porque no permite repetir

let iterador = arreglo[Symbol.iterator]();

var sss = new Set(iterador);//se le puede pasar el arrglo ya es en si iterable
//si no se hace desde el constructor (ocupando add),agrga todo como solo un elemto (array) en la primer posicion
console.log(sss);


//ITERANDO

for (const it of sss){
    console.log(it);
}

//iteracion co nforEach
sss.forEach(x => console.log(x));