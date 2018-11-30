import Pelicula from "./pelicula.js"
var pelicula1=new Pelicula('Averngers',"Accion", 2017, 120);
var pelicula2=new Pelicula('Harry Potter');

console.log('La duracion de la pelicula '+pelicula1.titulo+' es '+pelicula1.getDuracionEnHoras());
console.log(pelicula2); 

class Main{
    constructor(){
        document.querySelector('#btnAgregar').addEventListener('click', this.agregarPelicula)
    };
    agregarPelicula(){
        let inputNombre = document.querySelector('#nombre')
        let inputGenero=document.querySelector('#genero')
        let inputAño =document.querySelector('#año')
        let inputDuracion = document.querySelector('#duracion')
        var pelicula3=new Pelicula(inputNombre.value, inputGenero.value, Number(inputAño.value), Number(inputDuracion.value))
    
        console.log(pelicula3);
    };
}

var m = new Main();

/*
//Ejercicio fail 29/11/2018
var inputNombre = document.querySelector('#nombre')
var inputGenero=document.querySelector('#genero')
var inputAño =document.querySelector('#año')
var inputDuracion = document.querySelector('#duracion')
var btnAgregar = document.querySelector('#btnAgregar')

btnAgregar.addEventListener('click', agregarPelicula)

function agregarPelicula(){
    let año = Number(inputAño.value)
    let duracion = Number(inputDuracion.value)
    var pelicula3=new Pelicula(inputNombre.value, inputGenero.value, año, duracion)

    console.log(pelicula3)
}*/





/*
Queremos hacer un carrito de compras, se mec
crear la clase productos:
-nombre 
-cantidad 
-precio unitario

Metodos:
-Costo total en pesos
-Costo total en dolares

HTML:
-Formulario
  _Nombre
  _Cantidad
  _PrecioUnitario

  debe imprimir una intancia del producto
*/