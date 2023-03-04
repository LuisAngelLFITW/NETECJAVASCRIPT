//weakMap

/*
Las claves SOLO PUEDEN SER OBJETOS. NUNCA STRINGS
NO SON ITERABLES
NO OSN COLECCIONES QU SE PUEDEN RECORRER CON UN CICLO ](FOR)
SE DEBEN DE CONOCER LA CLAVE ANTES DE RECUPERAR EL VALOR
*/
var wm1 = new WeakMap();
var wm2 = new WeakMap();
var wm3 = new WeakMap();

var o1 = {};
var o2= function(){};
var o3= String;

wm1.set(o1, 1);
wm1.set(o2, "abc");
wm1.set(o3, 6);
wm1.set(Object, 8);

console.log(wm1); //nunca nos muiestr nada por que elemento no son iterables

console.log(wm1.get(o1)); //accede al valor de esa llave

//borrra
console.log("borrar que pasa CON");
console.log(wm1.delete(o1));
console.log(wm1.get(o1)); //despusesde borrar ahoera es indefinido, no null porque nulo es un objeto