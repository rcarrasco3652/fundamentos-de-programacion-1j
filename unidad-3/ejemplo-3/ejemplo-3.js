var resultado = document.querySelector('#resultado')
var btnEvaluar = document.querySelector('#btnNumero');
var inputNumero1 = document.querySelector('#numero')
var opciones = document.querySelector('#opciones')


btnEvaluar.addEventListener('click', evaluarNumero)
opciones.addEventListener('change', evaluacion)


function evaluacion(){
    var opcion = opciones.value
    var numero = Number(inputNumero1.value);
    

    if(opcion==='mitad'){
        resultado.textContent = 'La mitad es ' + (numero/2)
    }else if(opcion==='cuadrado'){
        resultado.textContent = 'El cuadrado es ' + (numero*numero)
    }else if(opcion=='par'){
        if(numero%2 === 0){
            resultado.textContent = 'El numero ' + numero+ ' es par'
        }else{
            resultado.textContent = 'el numero ' + numero + ' es impar'
        }
    }else{
        resultado.textContent = ""
    }
}


function evaluarNumero(){
    var numero = Number(inputNumero1.value);
    

    if(numero > 0){
        resultado.textContent = 'El numero ' + numero + ' es positivo';
    }else{
        resultado.textContent = 'El numero ' + numero + ' es negativo';
    }
    if(numero === 0){
        resultado.textContent = 'El numero ' + numero + ' es neutro'
    }
}