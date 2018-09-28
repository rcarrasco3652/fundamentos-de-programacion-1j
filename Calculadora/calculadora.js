var btnSumar = document.querySelector('#sumar');
btnSumar.addEventListener('click', sumar);
var btnDividir = document.querySelector('#dividir');
btnDividir.addEventListener('click', dividir);
var btnRestar = document.querySelector('#restar');
btnRestar.addEventListener('click', restar);
var btnMultiplicar = document.querySelector('#multiplicar')
btnMultiplicar.addEventListener('click', multi)

var inputNumero1 = document.querySelector('#numero1');
var inputNumero2 = document.querySelector('#numero2');

function sumar() {
    var resultado = Number(inputNumero1.value) + Number(inputNumero2.value);
    var inputResultado = document.querySelector('#resultado');

    inputResultado.value = resultado;
}

function dividir() {
    var resultado = Number(inputNumero1.value) / Number(inputNumero2.value);
    var inputResultado = document.querySelector('#resultado');

    inputResultado.value = resultado;
}

function restar() {
    var resultado = Number(inputNumero1.value) - Number(inputNumero2.value);
    var inputResultado = document.querySelector('#resultado')

    inputResultado.value = resultado;
}

function multi() {
    var resultado = Number(inputNumero1.value) * Number(inputNumero2.value)
    var inputResultado = document.querySelector('#resultado')

    inputResultado.value = resultado;
}