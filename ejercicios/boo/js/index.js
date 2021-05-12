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

// Seleccionamos los div.
const booArray = document.querySelectorAll('div.boo');

// Seleccionamos el body.
const body = document.body;

// Función que retorna un valor entero entre 0 y maxNum.
const getRandom = (max, min = 0) =>
    Math.floor(Math.random() * (max + 1 - min) + min);

// Recorremos el array de boo.
for (const boo of booArray) {
    // Intervalo que se repite cada segundo.
    setInterval(() => {
        // Obtenemos mediante destructuring el alto y el ancho de boo.
        const {
            height: booHeight,
            width: booWidth,
        } = boo.getBoundingClientRect();

        // Obtenemos la altura máxima.
        const maxHeight = window.innerHeight - booHeight;

        // Obtenemos el ancho máximo.
        const maxWidth = window.innerWidth - booWidth;

        // Generamos una nueva posición aleatoria.
        boo.style.cssText = `
        font-size: ${getRandom(150, 80)}px;
        top: ${getRandom(maxHeight)}px;
        left: ${getRandom(maxWidth)}px;
    `;

        // Cambiamos el color de fondo del body.
        body.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(
            255
        )}, ${getRandom(255)})`;
    }, 1000);
}
