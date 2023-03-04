var materias = ["ingles", "español", "filosofia"];

console.log(materias);

var arreglo = new Array(9);
var otro = new Array(9);
console.log(arreglo); //da el arreglo con espacios vacios
z = otro [4];

console.log(z);// da undefined

//arreglo.sort(f)//sort permite implemntar una funcion par tener los criterios de ordenacion que requieras

//concat es no mutable, no muta el arrglo original, por ejemplo pop si lo muta
var array1 = [1,2,3];
var array2  = array1.concat(4,5,6);
console.log(array2); //da lo mimso
var array3 = array1.concat([4,5,6]);
console.log(array3);//da lo mismo, concatena al arreglo arreglo del 1 al 6

var prueba =[1,2,3];
prueba.sort((a,b) => b-a);

console.log(prueba);

//pruebasMIAS
console.log("PRUEBAS MIAS");
var arrregloPrueba = [13,24,35,67,821,31]

arrregloPrueba.sort(miFuncion);

function miFuncion(x,y){
    if (x>y){
        return 1;
    }if (x<y){
        return -1;
    }
}
console.log(arrregloPrueba);