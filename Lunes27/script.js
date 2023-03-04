//Rscribir codigo javascript BIEN ESTRUCTURADO

//Explicar reglas de alcannce para variables locales
//Usar funciones invocadas de inmediato, modo estricto,e spacio de nom
//Usar objetos y funciones globales que sonn comunes en el lenguaje JS

//Parecido en sintaxis a JAVA Y C++
// Scope (alcance), hoisting (elevacion)

//Cuando se declara una variable en JS, tiene uno de do ambitos;
//Una variable puede tener alcance GLOBAL, si se define fuera de una funcion
// Una variable tiene alcance de funcio y se define dentro de una funcion

//Si se decalra variable dentro de bloque, la visibilidad de la variable se eleva al alcance de la funcion
// tal como si la variable se declarar al comienzo de la funcion

// La caracteristica más arriba señalada, mediante la cual las variables decalradas de un bloque se elevan al alcance de una funcion
// se conoce como Hoisting (ELEVACION)

var xx = 1;
function demo(){
    if (true){
        var xx= 10;
        console.log("El valor es " + xx);
        var xx = 100;

        function funInner(){
            if(true){
                var xx= 1000;

            }
            console.log("El valor es: "+ xx);
        }
        funInner();
    }
}

demo ();

//ESPACIO DE NOMBRES

//Este concepto se usa para evitar CONFLICTOS de nombres
//Todos los codigos de JS de la aplicaci{on wb, podrn acceder
//a las variables globales

//  Las aplicaiones JS pueden usar librerias de terceros
//que defninen sus propias variables globales

//JS proporciona vrios mecanismos que le ayudan a evitar conflictos
//de nombres globales, que icluyen
//  Funciones invocadas inmediatamente
//  Espacios de nombres
//  Modo estricto

// FUNCIONES INVOCADAS INMEDIATAMENTE

//Es una funcion que se define y se ejecuta de inmediato
//Se define una funcion invodada inmediatamente, envlviendola en una llamada                                
// de funcion anonima, que se ejecutainmediatamente

/*(function(){
    //CODIGO
})(); //se invoca inmediatamente*/

let x = (() => {
    console.log("Hola JS");
})();

//Expresion de feucion ejecutada inmediatamente IIFE

var xobje = {
    vOtra: function(){
        //Código
    }
};

//Con parametros
let y = function(a,b){
    console.log(a+b);
}(4,6);

//Se ocupa IIFE tambien por la PRIVACIDAD DE LOS DATOS

//Las variables declaradas convar enJS, tienen un alcance a nivel
//de funcion, esto implica que solo s pueden usar en la funcion que las contiene

//Es por esta razon, que toda vriables decalrada dentro de un IFFE
// no puede sr usada por fuera

let w = function(){
    var abc ='abc';
    console.log(abc);
}();

console.log(abc);

//OTRO EJEMPLO

var variableExterna = 'ABC';
let z = function(variableArgumento){
    console.log(variableArgumento);
}(variableExterna);
