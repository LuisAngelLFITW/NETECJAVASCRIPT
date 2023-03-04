//MODO ESTRICTO

//Las reglas para declarar variables son bastante relajadas

//Si se omite la palabra res4rvada var en una declaracion,
//la variable tiene implicitamente un alcance global (para JS,,no a nivel bloques?)

function unaFuncion(){
    "use strict"; //con esto se pone mdodo estricto para que tnga error por no poner tipo de decalracion
    var errorCode =100;
    //cuenta= 0;
    //console.log(cuenta);
}

unaFuncion();

// Cuando s use use strict, se obtemdra un error si intenta declarar
//una variable sin usar var o let o const
//JS noproporicnara automaticamente la variable de alcance global


//MANEJO DE JSON

let miCadena = '{"tam": 1, "color":"rojo"}';

var objJSON = JSON.parse(miCadena);
console.log(objJSON);

console.log(objJSON.color);

var cadenaJSON = JSON.stringify(objJSON); //lo vuelve a convertir en cadena
console.log(cadenaJSON);


//PARSEINT, PARSEFLOAT Y ISNAN

var miFuncion = function(){
    var edadCampo = "50";
    var alturaCampo = "Un metro con 60cm";
    var edad = parseInt(edadCampo);
    console.log(edad);

    var altura = parseFloat(alturaCampo);
    console.log(altura);

    if(isNaN(edad) || isNaN(altura)){
        console.log("Entrada no valida");
    }
}
miFuncion();
