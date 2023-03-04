function SuperHeroe(alias){
    this.alias = alias;
}

function Personaje(nombre, iniciales, autor, frase){
    this.nombre = nombre;
    this.iniciales = iniciales;
    this.autor = autor;
    this.frase = frase
}
function Cripton(casa){
    this.casa = casa;
}
function Superman(alias, edad, nombre, iniciales, autor, frase, casa){
    this.Superheroe = new SuperHeroe(alias);
    this.Personaje = new Personaje(nombre, iniciales, autor, frase);
    this.Cripton = new Cripton(casa);
    this.edad = edad;

    Object.defineProperty(this, "alias",
    {
        get: function(){
            return this.Superheroe.alias;
        }
    });
    Object.defineProperty(this, "frase",{
        get: function (){
            return this.Personaje.frase;
        },
        set: function(val){
            this.Personaje.frase = val;
        }
    })
    Object.defineProperty(this, "edad",{
        get: function(){
            return edad;
        },
        set: function(ed){
            edad = ed;
        }
    });
    Object.defineProperty(this, "casa",
    {
        get: function(){
            return this.Cripton.casa;
        },
        set: function (nombreCasa){
            this.Cripton.casa  = nombreCasa;
        }
    });
}

//instancia de suoperman
var superman = new Superman("Clrak", 22, "Superman", "SM", "x e y", "al infinito","S");

//console.log(superman.alias);
//
//console.log(superman.edad);
//
//superman.edad = 123;
//
//console.log(superman.edad);

console.log(superman.casa);

superman.casa = "G";

console.log(superman.casa);

