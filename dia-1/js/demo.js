'use strict';

// Seleccionamos el párrafo del body.
const p = document.querySelector('body > p');

// Seleccionamos el body por destructuring.
const { body } = document;

// Inicio un contador.
let seconds = 0;

// background-color: rgb(240, 0, 240);

// Función que retorna un nº aleatorio entre 0 y maxNum.
function getRandom(max) {
    return Math.round(Math.random() * max);
}

// setInterval que se repite cada segundo.
setInterval(() => {
    // Cambiamos el color de fondo del body aleatoriamente.
    body.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(
        255
    )}, ${getRandom(255)})`;

    // Cambiamos el contenido del párrafo.
    p.textContent = seconds++;
}, 1000);
