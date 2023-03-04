// PROMESAS

//LA PROGRAMACION ASINCRONA ES UNA DE LAS GRANDES VENTAJAS DE JS

// new Promise( function(resolver/rechazar){//hacer algo})  

//function es el ejecutor, que lleva parametro resolver o rechazar

// Si un error es lanzado en la funcion ejecutor, la promesa es rechazada y el valor del retorno del ejecutor es rechazado

//La promesa se puede encontrar e uno de los siguientes estados;
// pENDIENTE(PENDING}9 : ESTAO INIIAL, NO ESTA CUMPLIDA O RECHAZADA
//CUMPLIDA(FULFILLED): LA OPERACION se  completó satidfactoriamente
//rechazada(rejected): la operacion fallo
//finalizada (settled): se completa o rechaza

//Inicialmente , la promesa esta pendiente
//El ejeucutor inicia un trabajo asincrono, una vez que lo completa, llama a resolver
//lapromesa o reject si se produjo un error

//Si se llama a rechazar, usualmente, se obtiene un error que va a indicar la razon del rechazo
//Cuando una promesa se resuelve, entonces se ejecuta la funcion que se pasa a .cath(), de esta formas se puede controlar 
//el flujo de datos

const promesa  = new Promise ((resolve,reject)=> {
    const number = Math.floor(Math.random()*10);
    console.log("number", number)
    setTimeout(//espera
        () => number < 3 ?resolve(number) : reject("Menor a 3"),1000
    );
});

promesa.then( number =>  console.log("Exito " +number))
        .catch( error => console.log("Error "+error));

