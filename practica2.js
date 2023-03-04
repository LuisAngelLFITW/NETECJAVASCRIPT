var Cuenta = function (id, nombre){
    this.id = id;
    this.nombre = nombre;
    this.balance = 0;
    this.operaciones = 0;
}

var cta1 = new Cuenta (100,"l1");
var cta2= new Cuenta (1011, "ric");

Cuenta.prototype = {
    deposito : function (amt){
        this.balance += amt;
        this.operaciones++;
    },
    retiro : function (amt){
        this.balance -= amt;
        this.operaciones++;
    },
    print: function (){
        console.log(this.id + ", "
        +this.nombre + " balance $ "
        +this.balance + " ("
        +this.operaciones
        +" operaciones)");
    },
    comision: function () {
        this.balance -= 50;
        this.operaciones++;
    }
};

var cuentaEspecial = new Cuenta (1003, "Luis");
cuentaEspecial.deposito(1000);
cuentaEspecial.retiro(100);
cuentaEspecial.comision();
cuentaEspecial.print();