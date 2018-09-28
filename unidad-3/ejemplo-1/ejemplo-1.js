var edad;
var semestre=1;
edad = 18;

var title = document.querySelector ('h1');
title.addEventListener('click', updateName);//EventListener al darle click nos manda a la funcion updateName
function updateName() {
    var name = prompt ('Nombre del jugador'); //prompt hace qe aparesca una ventana emergente
    title.textContent = 'Jugador 1: ' + name;
}