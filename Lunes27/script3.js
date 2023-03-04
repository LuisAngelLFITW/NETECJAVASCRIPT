//ESPRESIONES REGULARES

//Una expresion regular es un objeto que describe un patron de caracteristicas

//Los patrones se usan par encontrar una combinacion de caracteres
//dentro de una acaddena de texto

//La clase REGEXP de JS representa la libreria para expresiones regulares
//strings y exprseiones regulares dfinen una serie de metodos,
//que usa xpresiones regulares 
//para relaizar y buscar coinidenicas de patrones

//var regexp = new RegExp(patron, atributos);

// Patron es una cadena que especifica el patron de la expresion regular
// Atributos: Es una cade opcional, pueden ser de este tipo
    // g: buscados busqueda completa, econtrando todos los resultados pósitivos
    // i : ignora entre mayusculas y minusculas
    // m: ʌ y $

    /*
    const cedula = '111222333';
    const regExp = new RegExp(/[0-9]/);
    const resultado = regExp.test(cedula);

    console.log(resultado);
    */

    const correo = 'lafl@gmail.com';
    const reg = new RegExp(/@/);
    const res = reg.test(correo);

    console.log(res);

    //ATRIBUTOS DE LAS EXPRESIONES REGULARES
    // luis@gmail.com

    // w -> abarca todos los caracteres desdes la a-z, A-Z y 0-9
    // + -> debe haber 1 o más ocurrencias del patrin definido
    // ? -> debe haber 0 o 1 ocurrencia del patron definido
    // * -> inidca que debe haber 0 o más ocurrencias del patron definido
    // {n,m} -> el patrón se puede repetir un minimo de n veces y un maximo de m veces
    // ʌ -> Indica que el texto debe comenzar con el patron definido
    // $ -> Inidca qu la cadena debe finalizar por el patron definido
    // [] -> Indica que la cadena puede tener algunosde los caracteres que se 
    // encuantran  entre los corchetes
    // \ escape, separar entre metacaracter

    const cedula = 'rodrigo..silva@gmail.com'; //
    const regExp = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/);
    const resultado = regExp.test(cedula);
     
    console.log(resultado);
     
    // ^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\. \w{2,10})+$
     