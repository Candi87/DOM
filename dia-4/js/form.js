'use strict';

// Seleccionamos el formulario por su nombre.
const form = document.forms.login;

// Seleccionamos el botón.
const button = document.querySelector('form > button');

// Array donde almacenaré los usuarios.
const users = [];

button.addEventListener('click', (e) => {
    // Prevenimos el comportamiento por defecto del botón en
    // el formulario.
    e.preventDefault();

    // Otra forma de seleccionar el formulario es seleccionando el padre
    // del target actual (el botón). Para este ejemplo no estaremos usando
    // esta constante, si no la declarada en la línea 4.
    const myForm = e.target.parentElement;

    // Instroducimos el valor de los campos dentro de un objeto simulando un
    // nuevo usuario que pushearemos en "users".
    users.push({
        name: form.elements.username.value,
        password: form.elements.password.value,
    });

    // Vacío los inputs.
    form.elements.username.value = '';
    form.elements.password.value = '';

    // Mostramos los cambios en el array "users".
    console.log(users);
});
