/**
 * #####################
 * ##  D O M   A P I  ##
 * #####################
 *
 * El DOM conecta el HTML y CSS del documento con Javascript representando el HTML
 * mediante un sistema de nodos en árbol con una serie de propiedades y métodos que
 * podemos usar para modificar la estructura, estilo y contenido.
 *
 * Veamos de forma simple cómo funciona el sistema de nodos.
 *
 */

console.log(`
 ####################################
 ##  Seleccionando un ÚNICO nodo.  ##
 ####################################
`);

// Seleccionando un nodo por ID.
const secondLi = document.getElementById('dos');

console.log('\nSeleccionado el segundo "li" por ID: ', secondLi);

// Seleccionando un ÚNICO nodo de una forma más guay.
const body = document.querySelector('body');

console.log('\nSeleccionado el "body": ', body);

// Con el método "querySelector('propiedad-css') podemos
// utilizar cualquier selector válido en CSS.
const header = document.querySelector('#principal');

console.log('\nSeleccionado el header por ID con querySelector: ', header);

console.log(`
 ######################################
 ##  Seleccionando múltiples nodos.  ##
 ######################################
`);

// Estos métodos devuelven SIEMPRE un [array] sin importar que solo
// exista un único elemento o nodo.

// Seleccionando múltiples nodos por clase.
const miClaseElements = document.getElementsByClassName('miClase');

console.log(
    '\nSeleccionado todos los nodos con clase "miClase": ',
    miClaseElements
);

// Selección de elementos por nombre de etiqueta.
const allLi_1 = document.getElementsByTagName('li');

console.log(
    '\nSeleccionado todos los elementos con etiqueta (tag) "li": ',
    allLi_1
);

// ¡La forma más guay! Como en el caso del "querySelector", el
// "querySelectorAll" acepta cualquier propiedad de CSS, por tanto
// sirve para sustituír a los dos métodos anteriores.A
const allLi_2 = document.querySelectorAll('li');

console.log(
    '\nSeleccionado todos los elementos con etiqueta (tag) "li" de forma más guay: ',
    allLi_2
);

console.log(`
 ##############################
 ##  Moviéndose por el DOM.  ##
 ##############################
`);

// Seleccionamos el elemento o nodo <html>;
const html = document.querySelector('html');

// Mostramos los hijos del nodo seleccionado. Devuelve siempre un array.
console.log('\nSeleccionamos los hijos del nodo <html>:', html.children);

// Mostrar el primer hijo del nodo seleccionado.
console.log(
    '\nSeleccionamos el primer hijo del nodo <html>:',
    html.firstElementChild
);

html.child;

// Mostrar el último hijo del nodo seleccionado.
console.log(
    '\nSeleccionamos el último hijo del nodo <html>:',
    html.lastElementChild
);

// Seleccionamos el <body> con la propiedad lastElementChild del nodo <html>.
const myBody = html.lastElementChild;

// Mostrar el hermano anterior. También podríamos movernos al hermano
// siguiente con "nextElementSibling". En este caso no se puede porque
// <body> no tiene hermanos a su derecha (<html> solo tiene dos hijos).
console.log(
    '\nSeleccionamos el hermano anterior del nodo <body>:',
    myBody.previousElementSibling
);

// Seleccionamos el primer hijo del <html>, que sería <heder>, y posteriormente
// seleccionamos el hermano siguiente. Esto daría como resultado <body>.
console.log(
    '\nSeleccionamos el hermano siguiente al nodo <head>:',
    html.firstChild.nextElementSibling
);

// Mostramos el padre de body.
console.log('\nSeleccionamos el padre del nodo <body>:', myBody.parentElement);

console.log(`
 ##############################################
 ##  Modificando el texto de los elementos.  ##
 ##############################################
`);

// En la línea 21 de este documento hemos seleccionado el segundo "li" y hemos
// guardado la referencia en la constante "secondLi" que usaremos a continuación.

// Una vez seleccionado el seguno li, utilizamos la propiedad "texContent" para
// modificar su contenido. NO es posible incluír nuevas etiquetas de html.
secondLi.textContent += ', Rojo';

console.log(
    '\nVisualicemos el nuevo contenido del segundo "li":',
    secondLi.textContent
);

console.log(`
 #############################################
 ##  Modificando el HTML de los elementos.  ##
 #############################################
`);

console.log(
    '\nDescomenta el código del documento para ejecutarlo. Esto modificará el contenido del <body> provocando que todo el código a continuación deje de funcionar. Recuerda volver a comentarlo para poder seguir examinando el resto del contenido.'
);

// Utilizamos la constante "body" que ya tiene la referencia del body
// porque se la hemos asignado previamente (linea 26).

const liName = 'Uno';

// La propiedad "innerHTML" sí nos permite introducir nuevas etiquetas. En el
// siguiente ejemplo genero TODO el contenido del <body> de forma dinámica con JS.

/* body.innerHTML = `
 <header>
     <h1>Tope guay</h1>
 </header>
 <main>
     <ul>
         <li>${liName}</li>
         <li>Dos</li>
     </ul>
 </main>
`; */

console.log(`
 ############################################################
 ##  Conociendo y modificando atributos de los elementos.  ##
 ############################################################
`);

const button = document.querySelector('button');

// Obtenemos el valor de un atributo del nodo (si existe).
console.log(
    '\nObtenemos el valor del atributo "lang": ',
    body.getAttribute('lang')
);

// Creamos el atributo "disabled" con el valor true.
button.setAttribute('disabled', true);

// Comprobamos si un elemento tiene un atributo.
console.log(
    '\nComprobamos si el <body> tiene el atributo "lang": ',
    body.hasAttribute('lang')
);

// Eliminar un atributo.
button.removeAttribute('disabled');

console.log(`
 ############################################
 ##  Modificando el CSS de los elementos.  ##
 ############################################
`);

console.log('\nVer en el documento.');

// Utilizaremos las constantes "body" y "secondLi" declaradas en las lineas
// 21 y 26 respectivamente.

// Seleccionamos el estilo "background-color" del <body> y lo modificamos.
body.style.backgroundColor = 'grey';

// Si queremos agregar varias propiedades de una sola vez.
secondLi.style.cssText = `
 color: red; 
 background-color: blue;
`;

// Agregando varias propiedades con el método "setAttribute".
secondLi.setAttribute('style', 'color: pink; background-color: black');

console.log(`
 ####################################################
 ##  Modificando las clases CSS de los elementos.  ##
 ####################################################
`);

// Agregar una clase a un elemento o nodo.
body.classList.add('principal');

// Eliminar una clase de un elemento o nodo.
body.classList.remove('miClase');

// Agrega una clase a un nodo si no existe y la elimina si existe.
body.classList.toggle('principal');
body.classList.toggle('principal');

// Método que comprueba si existe una clase. Devuelve true o false.
console.log(body.classList.contains('principal'));

// Reemplaza una clase por otra.
body.classList.replace('principal', 'secundario');

console.log(`
 ###################################################
 ##  Creando, borrando y sustituyendo elementos.  ##
 ###################################################
`);

// Seleccionamos el único "ul" del documento html.
const ul = document.querySelector('body > main > ul');

// Creamos un nuevo elemento o nodo;
const newLi = document.createElement('li');

// Agregamos un texto al nuevo "li".
newLi.textContent = 'Soy un nuevo li, wiiiiii...';

// Incorporamos el "li" como último hijo del "ul".
ul.append(newLi);

// Incorporamos el "li" como primer hijo del "ul". En este caso estamos
// moviendo de lugar el "li" porque ya lo habíamos agregado en la línea
// anterior como último hijo del "ul".
ul.prepend(newLi);

// Eliminamos el "li".
newLi.remove();

// Creamos un array de colores.
const colors = ['amarillo', 'azul', 'negro'];

// Creamos un fragmento de documento donde iremos almacenando
// los li del bucle. Esto se hace para no ir metiendo los li
// de uno en uno en el ul, no es recomendable.
const frag = document.createDocumentFragment();

// Recorremos el array y creamos un li en cada repetición con el valor
// del color en cuestión.
for (const color of colors) {
    // Creamos un li.
    const li = document.createElement('li');

    // Agregamos el color.
    li.textContent = color;

    // Lo "pusheamos" en el fragmento.
    frag.append(li);
}

// Ahora metemos todos los li a la vez en el ul.
ul.append(frag);
