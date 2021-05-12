/**
 * Ejemplo de la estructura final:
 *
 *  <ul id="tweets">
 *      <li>
 *          <p>Lo que escriba el usuario en el input.</p>
 *          <footer>
 *              <time>23/3/2021</time>
 *              <button class="action">Borrar</button>
 *          </footer>
 *      </li>
 *      <li>
 *          <p>Lo que escriba el usuario en el input.</p>
 *          <footer>
 *              <time>23/3/2021</time>
 *              <button class="action">Borrar</button>
 *          </footer>
 *      </li>
 *      <li>
 *          (...)
 *      </li>
 *  </ul>
 */

const form = document.forms.twitter;
const button = document.querySelector('button.action');
const input = document.querySelector('input.tweet');
const ul = document.querySelector('ul#tweets');

const now = new Date();
const date = now.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    const text = form.elements.tweet.value;
    if (text === '') {
        alert('Pon texto vago');
    } else if (text.length > 100) {
        alert('No des la chapa pone menos texto anda');
    } else {
        const li = document.createElement('li'); //el form.elements.tweet.value es para recoger los datos del input
        li.innerHTML = `
            <p>${form.elements.tweet.value}</p>
             <footer>
                 <time>${date}</time>
                 <button class="delete">Borrar</button>
             </footer>
         
    `;
        form.elements.tweet.value = '';
        ul.prepend(li);
    }
});

const handleListClick = (e) => {
    const { target } = e;
    if (target.matches('button.delete')) {
        const deleteLi = document.querySelector('li');
        deleteLi.remove();
    }
};
ul.addEventListener('click', handleListClick);
