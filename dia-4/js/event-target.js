'use strict';

// Seleccionamos TODOS los li.
const allLi = document.querySelectorAll('ul > li');

// Creamos la función manejadora. Al evento lo llamamos "e".
const handleLiClick = (e) => {
    // Seleccionamos de forma inequívoca el elemento sobre el cuál
    // hemos hecho click.
    const item = e.target;

    // Comprobamos si el elemento seleccionado tiene el atributo
    // "data-count". Si no lo tiene lo creamos y le asignamos el
    // valor 0.
    if (!item.hasAttribute('data-count')) {
        item.setAttribute('data-count', 0);
    }

    // Actualizamos el valor del contador. ¡Ojo! "getAttribute" devolverá
    // el valor del contador como un string.
    const updatedCount = Number(item.getAttribute('data-count')) + 1;

    // Actualizamos el contenido del li seleccionado.
    item.textContent = `${updatedCount} clicks`;

    // Actualizamos el valor del atributo "data-count";
    item.setAttribute('data-count', updatedCount);
};

// Recorremos el array de li y les agregamos el evento de click.
for (const li of allLi) {
    li.addEventListener('click', handleLiClick);
}
