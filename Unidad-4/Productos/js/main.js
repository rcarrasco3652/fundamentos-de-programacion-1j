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
        var np1 = new Producto(nombre, cantidad, precioUnitario);

        console.log(np1);

        let tabla=document.querySelector('#tabla')
        var row=tabla.insertRow(-1)
        var cell0=row.insertCell(0)
        var cell1=row.insertCell(1)
        var cell2=row.insertCell(2)
        var cell3=row.insertCell(3)
        var cell4=row.insertCell(4)
        cell0.innerHTML+= np1.nombre
        cell1.innerHTML+= np1.cantidad
        cell2.innerHTML+= np1.precioUnitario
        cell3.innerHTML+= np1.costoTotalEnPesos()//aun no puedo imprimir el costo total
        cell4.innerHTML+= np1.costoTotalEnDolares()
        console.log(np1.costoTotalEnPesos())
    }
}

var m = new Main();

document.querySelector('#agregar').addEventListener('click', Agregar)
function Agregar(){
   
}