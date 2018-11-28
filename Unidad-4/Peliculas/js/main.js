class Pelicula {
    constructor(nombre, genero, año, duracion) {
        this.titulo=nombre;
        this.genero=genero;
        this.año=año;
        this.duracion=duracion
    }
    getDuracionEnHoras(){
        let resultado=this.duracion/60;
        return resultado;
    }
}

var pelicula1=new Pelicula('Averngers',"Accion", 2017, 120);
var pelicula2=new Pelicula('Harry Potter');

console.log(pelicula1);
console.log(pelicula2);
