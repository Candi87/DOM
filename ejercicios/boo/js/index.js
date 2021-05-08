/**
 * #################
 * ## 👻 B O O 👻 ##
 * #################
 *
 * Haz que, cada segundo que pase, el div "boo" aparezca ubicado en una
 * posición aleatoria de la ventana y que el color del body cambie, también
 * de forma aleatoria "rgb(?, ?, ?)".
 *
 * ¡Ojo! No dejes que Boo se salga de los márgenes de la ventana, debemos
 * poder ver a Boo sin hacer scroll en ningún momento.
 *
 * element.getBoundingClientRect() --> devuelve una serie de propiedades
 * del nodo seleccionado, entre ellas, la altura y el ancho del elemento.
 *
 * Bonus point --> haz que aparezcan más emojis acompañando a Boo. Para ello
 *                 deberás crear más divs y seleccionarlos a todos. Esto
 *                 requerirá a mayores que cambies cositas en el código.
 *
 */
'use strict';

const { body } = document;

const div = document.querySelector('div');

const divProp = div.getBoundingClientRect();

console.log(window.innerHeight);
console.log(window.innerWidth);

const divHeight = divProp.height;
const divWidth = divProp.width;

const diffH = innerHeight - divHeight;
const diffW = innerWidth - divWidth;

function getRandom(max) {
    return Math.round(Math.random() * max);
}
setInterval(() => {
    //cambiamos a boo de posicion

    //cambiamos el color del body

    body.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(
        255
    )}, ${getRandom(255)})`;
}, 1000);
