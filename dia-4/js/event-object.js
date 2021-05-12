'use strict';

const button = document.querySelector('button');
const input = document.querySelector('form > input');
const header = document.querySelector('header');

// Todas las funciones manejadoras reciben por defecto un objeto que define
// el evento. Este objeto tiene una serie de propiedades y métodos útiles.
const handleClick = (event) => {
    // Objeto event.
    console.log(event);

    // La propiedad target selecciona de forma específica el elemento exacto
    // sobre el cuál ha hecho click el usuario.
    console.log(event.target);

    // La propiedad currentTarget muestra el elemento al cuál hemos asignado
    // el evento.
    console.log(event.currentTarget);
};

// Agregamos la función manejadora anterior al header como evento de click.
header.addEventListener('click', handleClick);

// Agregamos una función manejadora al evento keydown del input.
input.addEventListener('keydown', (e) => {
    console.log(e.target.value);
});
