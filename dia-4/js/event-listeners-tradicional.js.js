'use strict';

const button = document.querySelector('button');
const input = document.querySelector('form > input');

let count = 0;

// Agregamos un evento de click al botón seleccionado.
button.onclick = function () {
    console.log(count++);
};

// Agregamos un evento mouseover al botón seleccionado.
button.onmouseover = function () {
    console.log('Acabas de pasar el ratón por encima del botón');
};

// Agregamos un eventode foco al input seleccionado.
input.onfocus = function () {
    console.log('Foco sobre el input');
};

// Si intentamos agregar una segunda función manejadora a algún evento
// anterior esta nueva función sobreescribirá la anterior.
button.onmouseover = () => console.log('Modificado');

// De este modo desactivamos cualquier función.
button.onmouseover = () => null;
