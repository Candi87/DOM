'use strict';

const button = document.querySelector('button');
const input = document.querySelector('form > input');

/**
 * ##################
 * ## Button Click ##
 * ##################
 */

// Si no queremos deshabilitar el evento de click en ningún momento
// podemos crear el callback directamente en el método.
button.addEventListener('click', () => {
    console.log('¡Click en el botón!');
});

/**
 * ######################
 * ## Button Mouseover ##
 * ######################
 */

// Si en algún momento nos interesa deshabilitar una función manejadora
// necesitamos referenciarla en alguna variable.
const handleButtonMouseOver = () => {
    console.log('Has pasado el ratón por encima');
};

// Posteriormente utilizamos el método addEventListener y le pasamos el
// evento y la función manejadora que hemos declarado anteriormente.
button.addEventListener('mouseover', handleButtonMouseOver);

// Agregamos una segunda función manejadora. Esta vez lo hacemos insertando
// el callback directamente en el "addEventListener". Lo malo de esto es que
// no podremos deshabilitar esta función en un futuro.
button.addEventListener('mouseover', () => console.log('Hola'));

// Este setTimeOut desactiva la función manejadora "handleButtonMouseOver"
// en el evento "mouseover" a los 10 segundos.
setTimeout(() => {
    button.removeEventListener('mouseover', handleButtonMouseOver);
}, 10000);
