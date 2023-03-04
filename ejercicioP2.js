var Jugador = function (sueldo, nombre, numero){
    this.sueldo = sueldo;
    this.nombre = nombre;
    this.numero = numero
}


Jugador.prototype = {
    goles : function (nGol){
        this.sueldo += nGol * 50;
        //sube sueldo cada gol
    },
    faltas : function (nFalta){
        this.sueldo -= nFalta * 50;
    },
    print: function (){
        console.log(this.numero + ", "
        +this.nombre + " sueldo Final $ "
        +this.sueldo);
    },
};

var delantero = new Jugador (100, "Luis", 8);
delantero.goles(2);
delantero.faltas(1);
delantero.print();