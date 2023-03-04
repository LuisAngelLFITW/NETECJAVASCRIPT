class Gato{
    constructor(edad, nombre, comida){
        this.edad= edad;
        this.nombre=nombre;
        this.comida=comida
    }
}

let gato1 = new Gato(1,'Pelusa', "lasaña");
let gato2 = new Gato (1, 'Garfield', 'lasaña');
let gato3 = new Gato (2, 'Pelusa', 'atun');
let gato4= new Gato (3, 'Kat', 'whiskas');
let gato5= gato1;

let gatos = new Set();

gatos.add(gato1);
gatos.add(gato2);
gatos.add(gato3);
gatos.add(gato4);
gatos.add(gato5);

gatos.forEach(g => console.log(g));
