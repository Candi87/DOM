/**
 * Completa la tabla de temperaturas tomando como referencia
 * este array de ciudades. Tendrás que usar las siguientes
 * clases para cambiar el color de fondo de cada temperatura.
 *
 *  - lower: temp. menor que 4 (fondo azul).
 *
 *  - low: temp. entre 4 y 20 (fondo verde).
 *
 *  - medium: temp. entre 20 y 30 (fondo naranja).
 *
 *  - high: temp. mayor de 30 (fondo rojo).
 *
 */

const temperaturas = [
    {
        city: 'A Coruña',
        min: 17,
        max: 23,
    },
    {
        city: 'Ferrol',
        min: 15,
        max: 32,
    },
    {
        city: 'Lugo',
        min: -20,
        max: 31,
    },
    {
        city: 'Ourense',
        min: 18,
        max: 35,
    },
    {
        city: 'Pontevedra',
        min: 18,
        max: 29,
    },
];

// Seleccionamos el tbody.
const tbody = document.querySelector('table#temperaturas > tbody');

// Creamos un fragmento de documento.
const frag = document.createDocumentFragment();

// Función que recibe una temperatura y retorna un string.
function getTemp(temp) {
    if (temp < 4) {
        return 'lower';
    } else if (temp >= 4 && temp < 20) {
        return 'low';
    } else if (temp >= 20 && temp < 30) {
        return 'medium';
    } else if (temp >= 30) {
        return 'high';
    }
}

/**
 * ################
 * ## Solución 1 ##
 * ################
 */

/* // Recorremos el array de temperaturas.
for (const city of temperaturas) {
    // Creamos el elemento tr.
    const tr = document.createElement('tr');

    // Creamos los tres td.
    const cityTD = document.createElement('td');
    const minTD = document.createElement('td');
    const maxTD = document.createElement('td');

    //Asignamosla el contenido a los tres td.
    cityTD.textContent = city.city;
    minTD.textContent = city.min;
    maxTD.textContent = city.max;

    // Asignamos una clase a las temperaturas.
    minTD.classList.add(getTemp(city.min));
    maxTD.className = getTemp(city.max);

    // Agregamos los tres td como hijos del tr.
    tr.append(cityTD, minTD, maxTD);

    // Agregamosel tr al fragmento.
    frag.append(tr);
}

// Agregamos el fragmento al tbody.
tbody.append(frag);
 */

/**
 * ################
 * ## Solución 2 ##
 * ################
 */

// Recorremos el array de temperaturas.
for (const city of temperaturas) {
    // Creamos el elemento tr.
    const tr = document.createElement('tr');

    // Introducimos la información en el tr.
    tr.innerHTML = `
        <td>${city.city}</td>
        <td class=${getTemp(city.min)}>${city.min}</td>
        <td class=${getTemp(city.max)}>${city.max}</td>
    `;

    // Insertamos el tr en el fragmento.
    frag.append(tr);
}

// Insertamos el fragmento en el tbody.
tbody.append(frag);
