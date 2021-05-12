/**
 * Cada <li> debería tener una estructura similar a esta:
 *
 * <article>
 *      <header>
 *          <img src="${imagenUsuario}" alt="${nombreCompleto}">
 *          <h1>${nombreCompleto}</h1>
 *      </header>
 *      <p>${ciudad} (${país}), ${añoNacimiento}</p>
 * </article>
 *
 *
 * API: https://randomuser.me/api/?results=10
 */
'use strict';

//seleccionamos nodos que necesitamos

const ul = document.querySelector('ul,userlist');
const liLoading = document.querySelector('li.loading');
const frag = document.createDocumentFragment();

//creamos funcion aíncrona, que crera un nºx de usuarios
const getUsers = async (limit) => {
    try {
        const response = await fetch(
            `https://randomuser.me/api/?results=${limit}`
        );
        //obtenemos el array de usuarios con destructuring
        const { results } = await response.json();
        //recorremos el array
        for (const user of results) {
            //alamcenamos la info que no interesa
            console.log(user);
            const picture = user.picture.large; //almacenamos img
            const { first, last } = user.name; //alamcenamos nombre
            const { city, country } = user.location; //alamcenamos país y ciudad
            const bornYear = new Date(user.dob.date).getFullYear(); //almacenamos fecha

            //creamos un li
            const li = document.createElement('li');

            //insertamos en el li toda la estructura
            li.innerHTML = `
                <article>
                    <header>
                        <img src="${picture}" alt="${first} ${last}">
                        <h1>${first} ${last}</h1>
                    </header>
                    <p>${city} (${country}), ${bornYear}</p>
                </article>
                `;
            frag.append(li);
        }
        liLoading.remove();

        ul.append(frag);
    } catch (error) {
        console.log(error);
    }
};
setTimeout(() => {
    const numberUsers = Number(
        prompt('inserte un nº de usuarios del 1 al 100:')
    );
    getUsers(numberUsers);
}, 500);
