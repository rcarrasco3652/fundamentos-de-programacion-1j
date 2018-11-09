//var a1 = []
//var a2 = new Array()    //Diferentes formas de crear un aray
//var a3 = Array()
//a1.length   //Leer cuantos elementos tengo
//a1[0]="hola"   //Se agrego un valor en la posicion 0
//a1[5]=5
//var parrafo = document.querySelector('#p')
//parrafo.textContent = a1[0]+a1[5]
//a1.push('x')   //Sirve para agregar un nuevo valor al final del vector
//a1.pop()   //Elimina el ultimo elemento del array
//a1.shift()  //Elimina el primer valor del array
//a1.unshift('cualquier', 'cosa', 6)   //Agrega elementos al inicio de un array
//a2 = a1.slice(1,2,3)    //Sirve para extraer valores de un vector
var v1 = ['a', 'b', 'c', 'd', 'e', 'f']
//v1.splice(2,2) //Elimina los valores en la posicion dos 
//(dos elementos, posicion de los elementos)
//v1.reverse()//Sirve para voltear los valores de posicion 
v1.sort()//ordenar los valores alfabeticamente
v1.indexOf()//Sirve para buscar algun valor  

var numero = document.querySelector('#numero')
var btn = document.querySelector('#boton')
var tabla = document.querySelector('#tabla')

btn.addEventListener('click', sacar)

function sacar(){
    var num = Number(numero.value)
    var vector = []
    
    for(i=0;i<num;i++){
        var valores = prompt('Ingresa los valores de el array')
        vector[i]=valores
    
    }

    for(i=0; i<vector.length;i++){
        var row = tabla.insertRow(-1)
        var cell = row.insertCell(0)
        var cell2 = row.insertCell(1)
        cell2.innerHTML = vector[i]
        cell.innerHTML = i
    }

    var row = tabla.insertRow(-1)

    vector.forEach(function(valor){
        var row = tabla.insertRow(-1)
        var cell = row.insertCell(0)
        cell.innerHTML = valor
    })

    console.log(vector)
}