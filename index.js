const { Formaciones } = require('./Formaciones.js');
const { Vagones } = require('./Vagones.js');
const { VagonPasajeros } = require('./VagonPasajeros.js');
const { VagonCarga } = require('./VagonCarga.js');
const { VagonDormitorio } = require('./VagonDormitorio.js');

const vagonRojo = new Vagones(30)
const formacionAlpha = new Formaciones("Vagon Rojo")

formacionAlpha.agregarVagon(vagonRojo)

console.log(`Lista de vagones de la Formación 1: ${formacionAlpha.verListaVagones()}`)
console.log(`Está equilibrada?: ${formacionAlpha.estaEquilibrada()}`)

// Crear los vagones para la primera formación
const vagon1 = new VagonPasajeros(10, 4, true, true); // Ordenado, con baño
const vagon2 = new VagonPasajeros(7, 2, false, false); // No ordenado, sin baño
const vagon3 = new VagonCarga(6800, 5);
const vagon4 = new VagonDormitorio(8, 3);

console.log("Vagón 1:");
console.log("Cantidad de pasajeros: " + vagon1.verCantidadPasajeros());
console.log("Peso máximo: " + vagon1.maximoPeso());
console.log("Carga máxima: " + vagon1.verLaMaximaCarga());
console.log("¿Tiene baño?: " + (vagon1.verSiTieneBanio() ? "Sí" : "No"));

console.log("\nVagón 2:");
console.log("Cantidad de pasajeros: " + vagon2.verCantidadPasajeros());
console.log("Peso máximo: " + vagon2.maximoPeso());
console.log("Carga máxima: " + vagon2.verLaMaximaCarga());
console.log("¿Tiene baño?: " + (vagon2.verSiTieneBanio() ? "Sí" : "No"));

console.log("\nVagón 3:");
console.log("Cantidad de maderas sueltas: " + vagon3.verCantidadMaderasSueltas());
console.log("Peso máximo: " + vagon3.maximoPeso());
console.log("Carga máxima: " + vagon3.calcMaximaCarga());
console.log("¿Tiene baño?: " + (vagon3.verSiTieneBanio() ? "Sí" : "No"));

console.log("\nVagón 4:");
console.log("Cantidad de pasajeros: " + vagon4.verCantidadPasajeros());
console.log("Peso máximo: " + vagon4.maximoPeso());
console.log("Carga máxima: " + vagon4.maximaCarga());
console.log("¿Tiene baño?: " + (vagon4.verSiTieneBanio() ? "Sí" : "No"));


// Crear la primera formación
const formacion1 = new Formaciones('\nFormación 1');
formacion1.agregarVagon(vagon1);
formacion1.agregarVagon(vagon2);
formacion1.agregarVagon(vagon3);
formacion1.agregarVagon(vagon4);

// Verificaciones antes de hacer mantenimiento
console.log('Verificaciones antes de hacer mantenimiento:');
console.log('Pasajeros: ' + formacion1.cuantosPasajerosPuedeLlevar());
console.log('Vagones populares: ' + formacion1.cuantosVagonesPopularesTiene());
console.log('Es carguero: ' + formacion1.esFormacionCarguera());
console.log('Dispersión de pesos: ' + formacion1.dispersionDePesos());
console.log('Baños: ' + formacion1.tieneBanios());

// Hacer mantenimiento en la primera formación
formacion1.hacerMantenimiento();

// Verificaciones después de hacer mantenimiento
console.log('\nVerificaciones después de hacer mantenimiento:');
console.log('Pasajeros: ' + formacion1.cuantosPasajerosPuedeLlevar());
console.log('Vagones populares: ' + formacion1.cuantosVagonesPopularesTiene());
console.log('Es carguero: ' + formacion1.esFormacionCarguera());
console.log('Dispersión de pesos: ' + formacion1.dispersionDePesos());
console.log('Baños: ' + formacion1.tieneBanios());