//import Producto from "./productos.js"
class Producto{
    constructor(nombre, cantidad, precio/*, costoMxn, costoDlls*/){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precioUnit=precio;
        /*this.costoMxn=costoMxn;
        this.costoDlls=costoDlls;*/
    }
    costoTotalEnPesos(){
        let costoTotal=this.precioUnit*this.cantidad;
        return costoTotal;
    }
    costoTotalEnDolares(){
        let costoTotal=(this.precioUnit/20.29)*this.cantidad;
        return costoTotal;
    }
}

class Main{
    constructor(){
        document.querySelector('#agregar').addEventListener('click', this.agregarProducto);
    }
    agregarProducto(){
        let nombre = document.querySelector('#nombre').value;
        let cantidad = Number(document.querySelector('#cantidad').value);
        let precioUnitario = Number(document.querySelector('#precioUnit').value );
        var nuevoProdcuto = new Producto(nombre, cantidad, precioUnitario);

        console.log(nuevoProdcuto);

        let tabla=document.querySelector('#tabla')
        var row=tabla.insertRow(-1)
        var cell0=row.insertCell(0)
        var cell1=row.insertCell(1)
        var cell2=row.insertCell(2)
        var cell3=row.insertCell(3)
        var cell4=row.insertCell(4)
        cell0.innerHTML+= nombre
        cell1.innerHTML+= cantidad
        cell2.innerHTML+= precioUnitario
        cell3.innerHTML+= nuevoProducto.costoTotalEnPesos()//aun no puedo imprimir el costo total
        cell4.innerHTML+= nuevoProdcuto.costoTotalEnDolares()
    }
}

var m = new Main();

document.querySelector('#agregar').addEventListener('click', Agregar)
function Agregar(){
   
}