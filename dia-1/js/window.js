// Altura del área de contenido de la ventana (en px):
console.log('\nAlto del área del documento: ', window.innerHeight);

// Ancho del área de contenido de la ventana (en px):
console.log('\nAncho del área del documento: ', window.innerWidth);

// Altura de la ventana al completo(en px):
console.log('\nAltura total de la ventana: ', window.outerHeight);

// Ancho de la ventana al completo(en px):
console.log('\nAncho total de la ventana: ', window.outerWidth);

// Mostrar el objeto URL del documento actual.
console.log('\nObjeto "location": ', window.location);

// Esto redirecciona nuestra ventana actual al lugar indicado en la URL.
// window.location.href = 'https://google.com';

console.log(
    '\nCon la propiedad "userAgent" del objeto "navigator" podemos averiguar qué navegador utiliza el usuario:\n\n',
    window.navigator.userAgent
);

// Esta variable almacenará el navegador del usuario.
let userBrowser;

// Utilizamos destructuring para obtener el valor de la propiedad "userAgent".
const { userAgent } = window.navigator;

// Si en el string "userAgent" encontramos la palabra Chrome, ese será el
// navegador del usuario. La misma lógica se aplica para los demás.
// Recordad que, si se ejecuta el primer "if", el resto de opciones ya no
// se ejecutan.
if (userAgent.indexOf('Chrome') > -1) {
    userBrowser = 'Google Chrome';
} else if (userAgent.indexOf('Safari') > -1) {
    userBrowser = 'Apple Safari';
} else if (userAgent.indexOf('Opera') > -1) {
    userBrowser = 'Opera';
} else if (userAgent.indexOf('Firefox') > -1) {
    userBrowser = 'Mozilla Firefox';
} else if (userAgent.indexOf('MSIE') > -1) {
    userBrowser = 'Microsoft Internet Explorer';
}

console.log('\nEl usuario está utilizando el navegador: ' + userBrowser);

// Mostrar el scroll horizontal y vertical (en px).
console.log(
    '\nMostramos el scroll horizontal y vertical respectivamente:',
    window.scrollX,
    window.scrollY
);

// Window console.
console.log('\nMostramos el objeto "console": ', window.console);

// Abrir una nueva pestaña en el navegador y guardar la referencia en la
// constante "google".
const google = window.open('https://google.com');

// Podemos usar la referencia a la nueva ventana para cerrar "google".
setTimeout(() => google.close(), 3000);

// Abrir la ventana de impresión.
// window.print();
