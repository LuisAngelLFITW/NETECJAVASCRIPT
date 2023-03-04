// MAP

//CONJUNTO clave/valor

//para anadir un elemento se llama a set()
//recuperar elemento .get()
//saber si elemeno est en el map .has()
//elimnar elemento del map delete()
//elminar todo!! .clear()

let capitales = new Map();//clase map com tambie son clases los arreglo pej

capitales.set('Mexico', {
    'n_n': 'Cdmx',
    'n_o': 'Distrito federal'
});

capitales.set('Chile', 'Santiago');
capitales.set('Argentina', 'buenos aires');

console.log(capitales);
var a = capitales.get('Mexico');
console.log(a);

console.log("**SABER SI TIENE ELEMENTO")
console.log(capitales.has("Argentina"));

var b = capitales.get('Mexico').n_n;//acceso si hay difereentes valores de esa clave
console.log(b);

console.log(capitales.size);

//has para saber si se encuentra elemento
console.log(capitales.has("Argentina")); //boolean

//si se vuelve a hacer un set de una clave que ya estaba la remplaza
console.log("ITERACION CON MAP")
const mapIte = capitales[Symbol.iterator](); //devuelve un json en donde cada elemento de map esta en un arreglo [clave, valor]
console.log(mapIte);
console.log("NEXTP")

console.log(mapIte.next());

console.log("IVALUE")

console.log(mapIte.next().value);

console.log("FOR")

for (const ren of capitales){
    console.log(ren);
}

console.log("***********");

for (const [k,v] of capitales){
    console.log(`${k} : ${v}`);
}