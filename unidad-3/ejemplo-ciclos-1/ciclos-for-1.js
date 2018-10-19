var btnUno = document.querySelector('#btnUno');
var inputNumero = document.querySelector('#numero');
var tabla = document.querySelector('#resultado')
var btnDos = document.querySelector('#btnDos')
var btnTres = document.querySelector('#btnTres');
var btnCuatro = document.querySelector('#btnCuatro');
var opciones = document.querySelector('#opciones');

btnUno.addEventListener('click', ejemplo1);
btnDos.addEventListener('click', ejemplo2);
btnTres.addEventListener('click', ejemplo3);
btnCuatro.addEventListener('click', ejemplo4);

function ejemplo1(){
    var numero = Number(inputNumero.value);

    for (var i = 0; i <= numero; i++){
        //console.log(i);
        var row = tabla.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;
    }
}

function ejemplo2() {
    var numero = Number(inputNumero.value)
    
    for (var i = 1; i <= numero; i++){
        var valor = prompt("ingresa un numero " + i + "/" + numero + ":");
        var row = tabla.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = valor;
    }
}

function ejemplo3() {
    var numero = Number(inputNumero.value);
    var i = 1;
    while (i <= numero) {
        var row = tabla.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;

        i++;
    }
}
function ejemplo4(){
    var numero = Number(inputNumero.value)
    var i = numero
    while(i>0){
        var opc = document.createElement('option')
        opc.text = i
        opciones.add(opc)

        i--
    }
}