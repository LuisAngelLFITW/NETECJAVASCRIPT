/*var frutas = ["Manzana", "PLatano", "Mango"];

frutas.forEach(mostrar); //hace algo para cada elemento del arreglo

function mostrar(valor){
    console.log(valor + " - ");
}
*/


// JSON
var persona = {
 
    "nombre": "Gabriel",
    "apellido": "Guerrero",
    "edad": 50,
 
    "direccion": {
        "calle": "Montecitos",
        "ciudad": "Ciudad de México",
        "estado": "DF",
        "cp": 10021
    },
 
    "telefonos": [
        { "tipo": "casa", "numero": "212 555-1234" },
        { "tipo": "cel", "numero": "646 555-4567" }
                ]
};
 //acceso a diferentes claves y elementos en estrucutras JSON
/*console.log(persona.nombre);
console.log(persona.direccion.calle);
console.log(persona.telefonos.length);
console.log(persona.telefonos[0].numero);*/

// JSON
 
var escuela = {
 
    "estudiantes": [
        { "nombre": "Juan Martínez", "grado": "6A" },
        { "nombre": "Adriana Mosqueda", "grado": "5B" },
        { "nombre": "Jesús Díaz", "grado": "1A" }
                    ],
    
    "profesores": [
        { "nombre": "Francisco Martínez", "materia": "Español" },
        { "nombre": "Mónica Escalante", "materia": "Historia" },
        { "nombre": "Gabriel Guerrero", "materia": "Ingles" }
                ],
};
 
/*console.log(escuela.estudiantes[0].nombre);
console.log(escuela.profesores[2].nombre);
console.log(escuela.profesores[1].materia);*/

//queremos obtener numero del profesor que imparte ingles relacionando ambos json
function numeroProfesor(materia, datosPersona, datosEscuela){
    let i=0;
    let nombrePersona= datosPersona.nombre;
    let numeroCelular;
    //iteracion sobre el arreglo de profesores para encontar al que imparte la materia
    for (i; i<datosEscuela.profesores.length; i++){
        //console.log(datosEscuela.profesores[i].materia, materia);
        if (datosEscuela.profesores[i].materia == materia){
            nombreProfesor = datosEscuela.profesores[i].nombre;
            //nombreProfesor es nombre completo, para comparar con los datos disponibles del json persona
            //necesitamos solo el primer nombre
            primerNombreProfesor=nombreProfesor.split(" ",1)[0];//separa la ceda cada que encuentre un espacio, solo 1 elemento y accede al primer nombre
            //console.log("ff",nombrePersona , primerNombreProfesor);
            if (nombrePersona == primerNombreProfesor){
                numeroCelular= datosPersona.telefonos[1].numero;
            }else{
                nombrePersona = "Ningun profesor";
            }
            materiaFinal = materia;
            break;
        }else{
                materiaFinal = "No existe materia  ";
            }
        }
        return "El profesor "+ nombrePersona+ " que imparte " +materiaFinal +" tiene el celular: "+numeroCelular;
    }



let nCel= numeroProfesor("asdf",persona, escuela);

console.log(nCel);

console.log("AQUI SE MANDA UNA MATERIA CORRECTA")
let nuCelIngles = numeroProfesor("Ingles",persona, escuela);
console.log(nuCelIngles);
