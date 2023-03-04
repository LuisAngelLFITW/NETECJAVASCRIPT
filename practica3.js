function Mascota (nombre, juguete, alimento){
    this.nombre = nombre;
    this.juguete = juguete;
    this.alimeento = alimento;
}

Mascota.nombre = "chems"; //en js se puede asignar asi un valor, esta mal pero funciona
console.log(Mascota.nombre);

//o
Mascota.amistoso = true;

console.log(Mascota.amistoso);//se imprime  a pesar de que inicialmente cno estb en el constructor

var miMascota = new Mascota("Pelusa", "trapo", "croquetas");
console.log(miMascota);
