/**
 * Completa la tabla de temperaturas tomando como referencia
 * este array de ciudades. Tendrás que usar las siguientes
 * clases para cambiar el color de fondo de cada temperatura.
 *
 *  - lower: temp. menor que 4: fondo azul.
 *
 *  - low: temp. entre 4 y 20: fondo verde
 *
 *  - medium: temp. entre 20 y 30: fondo naranja
 *
 *  - high: temp. mayor de 30: fondo rojo
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

//creamos arrays de el objeto temperaturas

const ciudades = temperaturas.map(function (temperatura) {
    return temperatura.city;
});
console.log(ciudades);

const tempMax = temperaturas.map(function (temperatura) {
    return temperatura.min;
});
console.log(tempMax);

const tempMin = temperaturas.map(function (temperatura) {
    return temperatura.max;
});
console.log(tempMin);

// const tbody = document.querySelector('tbody');
const tr = document.createElement('tr');
// const td = document.createElement('td');
const frag = document.createDocumentFragment();

for (let i = 0; i < ciudades.length; i++) {
    const ciudad = ciudades[i];

    const td = document.createElement('td');
    td.textcontent = ciudad;
    frag.append(td);
    console.log(ciudad);
}
tr.append(frag);
