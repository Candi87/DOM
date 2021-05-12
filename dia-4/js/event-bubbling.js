'use strict';

const button = document.querySelector('button.add');
const ul = document.querySelector('ul.items');

// Contador de li. Lo utilizaremos para pintar el texto de cada li.
let liCount = 0;

/**
 * ####################
 * ## handleAddClick ##
 * ####################
 */

// Función manejadora que crea un nuevo li dentro del ul.
const handleAddClick = (e) => {
    // Creamos el li.
    const li = document.createElement('li');

    // Creamos un nodo de texto plano y le asignamos el contenido.
    const textNode = document.createTextNode(`Item ${liCount++}`);

    // Creamos un botón para poder borrar el li.
    const deleteButton = document.createElement('button');

    // Asignamos una clase al botón.
    deleteButton.classList.add('delete');

    // Asignamos un texto al botón.
    deleteButton.textContent = '¡Bórrame!';

    // Agregamos como hijos del li el nodo de texto y el botón.
    li.append(textNode, deleteButton);

    // Alternativa a lo realizado anteriormente.
    // li.innerHTML = `Item ${ul.children.length} <button class="delete">¡Bórrame!</button>`

    // Agregamos el li como hijo del ul.
    ul.append(li);
};

// Agrego la función manejadora al evento de click del botón.
button.addEventListener('click', handleAddClick);

/**
 * #####################
 * ## handleListClick ##
 * #####################
 */

// Función manejadora que comprueba si el elemento seleccionado tiene un
// selector concreto antes de actuar.
const handleListClick = (e) => {
    // Obtenemos el item concreto sobre el cuál hicimos click.
    const { target } = e;

    // Si el elemento clickado es un botón con la clase "delete"...
    if (target.matches('button.delete')) {
        // Seleccionamos el padre (el li).
        const parentLi = target.parentElement;

        // Eliminamos el li.
        parentLi.remove();
    }
};

// Agrego el segundo manejador como evento de click al ul.
ul.addEventListener('click', handleListClick);
