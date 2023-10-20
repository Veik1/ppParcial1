const { Vagones } = require("./Vagones.js");
const { VagonPasajeros } = require('./VagonPasajeros.js');
const { VagonCarga } = require('./VagonCarga.js');
const { VagonDormitorio } = require('./VagonDormitorio.js');

class Formaciones {
  #nombreVagon;
  constructor(unNombre) {
    this.#nombreVagon = unNombre;
    this.listaVagones = [];
  }

  agregarVagon(vagon) {
    this.listaVagones.push(vagon);
  }

  verListaVagones() {
    const nombreListaVagones = this.listaVagones.map(
      (vagon) => this.#nombreVagon
    );
    return nombreListaVagones.join(", "); // lista de vagones, quizás no lo haya pedido, lo hice al mediodía, porque quería ver mis vagones de un tren específico
  }

  estaEquilibrada() {
    const totalPasajeros = this.listaVagones.map((vagon) =>
      vagon.verCantidadPasajeros()
    );
    const maxPasajeros = Math.max(...totalPasajeros);
    const minPasajeros = Math.min(...totalPasajeros);
    return maxPasajeros - minPasajeros <= 20;
  }

  estaOrganizada() {
    const vagonesConPasajeros = this.listaVagones.filter((vagon) =>
      vagon.tienePasajeros()
    );
    const vagonesSinPasajeros = this.listaVagones.filter(
      (vagon) => !vagon.tienePasajeros()
    );

    if (vagonesConPasajeros.length === 0 || vagonesSinPasajeros.length === 0) {
      return true;
    }

    const primerVagonConPasajeros = vagonesConPasajeros[0];
    const ultimoVagonSinPasajeros =
      vagonesSinPasajeros[vagonesSinPasajeros.length - 1];

    return (
      this.listaVagones.indexOf(primerVagonConPasajeros) <
      this.listaVagones.indexOf(ultimoVagonSinPasajeros)
    );
  }

  cuantosPasajerosPuedeLlevar() {
    const totalPasajeros = this.listaVagones.reduce(
      (acum, vagon) => acum + vagon.verCantidadPasajeros(),
      0
    );
    return totalPasajeros;
  }

  cuantosVagonesPopularesTiene() {
    return this.listaVagones.filter(
      (vagon) => vagon.verCantidadPasajeros() > 50
    ).length;
  }

  esFormacionCarguera() {
    return this.listaVagones.every((vagon) => {
      return vagon.puedeTransportarCarga ? vagon.puedeTransportarCarga() : true;
    });
  }

  dispersionDePesos() {
    const pesosVagones = this.listaVagones.map((vagon) => vagon.maximoPeso());
    const maxPeso = Math.max(...pesosVagones);
    const minPeso = Math.min(...pesosVagones);
    return maxPeso - minPeso;
  }

  tieneBanios() {
    const vagonesConBanios = this.listaVagones.filter(
      (vagon) => vagon.verSiTieneBanio()
    );
    return vagonesConBanios.length;
  }
  
  hacerMantenimiento() {
    this.listaVagones.forEach((vagon) => {
      if (vagon instanceof VagonPasajeros) {
        // Mantenimiento de vagones de pasajeros: ordenarlos
        vagon.ordenar(true);
      } else if (vagon instanceof VagonCarga) {
        // Mantenimiento de vagones de carga: arreglar maderas sueltas
        vagon.arreglarMaderasSueltas();
      }
      // No es necesario lógica para vagones dormitorio, ya que no requieren mantenimiento según la consigna.
    });
  }

  

}

module.exports = { Formaciones };
