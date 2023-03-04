// IF
/*
var edad1 =20;
var edad2 = 15;

if(edad1 > 10 && edad2 >10){
    console.log("Hola Js")
}
var x;
if(true | false | false){
    console.log("or");
}
*/

//ITERACIONES

/*var contador =0;
while (contador <10){
    console.log(contador);
    contador += 1;
}
*/
//DO WHILE

/*var c = 0;
do{
    console.log(c);
    c+=1;
}while (contador < 10);
*/

/*
//FOR
a=0;
for (a; a<10; a++){
    console.log(a);
}
*/
/*
//asi nos da 0 a 4 y despues 5

var i =  10;

for (var i=0; i<5; i++){
    console.log(i);
}
console.log(i);

//asi nos da 0 a 4 y despues 10, por let y el scope
console.log("_______");
let j =  10;

for (let j=0; j<5; j++){
    console.log(j);
}
console.log(j);
*/


/*
var lenguajes = ["java", "C++", "sdcheme"];
var lgn;
for (lgn of lenguajes){
    console.log(lgn);
}

var cadena = "javascripot";
var cara;
//tabmin recorre cadenas
for (cara of cadena){
    console.log(cara);
}
*/

//BNREAK ROMPE EL CICLO, continua rompe la iteracion actual
var x=1;

while (x<20){
    if(x==5){
        break;
    }
    x++;

    console.log(x);
}

console.log(".---------------");
var y=1;

while (y<10){
    y++;
    if(y==5){
        continue;
    }

    console.log(y);
}