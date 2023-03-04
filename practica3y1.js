function Mascota (nombre, juguete, alimento){
    var _nombre = nombre;
    var _juguete = juguete;
    var _alimento = alimento;
    Object.defineProperty(this, 'nombre',
    {
        get: function (){
            return _nombre;
        }
    })
    //Metodos set y get para atributo juguete
    Object.defineProperty(this,'juguete',
    {
        get: function (){
            return _juguete;
        },
        set: function(nuevoValor){
            if (nuevoValor != null && nuevoValor != ""){
                _juguete = nuevoValor;
            }
        }
    })
    Object.defineProperty(this, 'alimento',
    {
        get: function(){
            return _alimento;
        },
        set: function(nuevoValor){
            if (nuevoValor != null){
                _alimento = nuevoValor;
            }
        }
    })
}

var miPerro = new Mascota("Kuro", "correr", "croquetas");
console.log(miPerro.nombre);

miPerro.alimento= "CARNE";
console.log(miPerro.alimento);

//no se permite asignar setear un nulo debido a la implemntación edl seter
//imprime el valor inicial ya que no cambio el valor
console.log(miPerro.juguete);
miPerro.juguete= null;
console.log(miPerro.juguete);