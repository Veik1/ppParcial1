const { Vagones } = require("./Vagones.js");
const { VagonPasajeros } = require("./VagonPasajeros.js");
const { VagonCarga } = require("./VagonCarga.js");
const { VagonDormitorio } = require("./VagonDormitorio.js");

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
    const vagonesConPasajeros = this.listaVagones.filter((vagon) =>
      vagon.tienePasajeros()
    );

    return vagonesConPasajeros.length === 0
      ? true
      : vagonesConPasajeros.reduce(
          (acum, vagon) => vagon.verCantidadPasajeros(),
          0
        ) -
          vagonesConPasajeros.reduce(
            (acum, vagon) => vagon.verCantidadPasajeros(),
            0
          ) <=
          20;
  }

  estaOrganizada() {
    const vagonesConPasajeros = this.listaVagones.filter((vagon) =>
      vagon.tienePasajeros()
    );
    const vagonesSinPasajeros = this.listaVagones.filter(
      (vagon) => !vagon.tienePasajeros()
    );

    return vagonesConPasajeros.length === 0 || vagonesSinPasajeros.length === 0
      ? true
      : this.listaVagones.indexOf(vagonesConPasajeros[0]) <
          this.listaVagones.indexOf(
            vagonesSinPasajeros[vagonesSinPasajeros.length - 1]
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
    const vagonesConBanios = this.listaVagones.filter((vagon) =>
      vagon.verSiTieneBanio()
    );
    return vagonesConBanios.length;
  }

  hacerMantenimiento() {
    // si aplico ternaria acá exploto.
    this.listaVagones.forEach((vagon) => {
      if (vagon instanceof VagonPasajeros) {
        vagon.ordenar(true);
      } else if (vagon instanceof VagonCarga) {
        vagon.arreglarMaderasSueltas();
      }
    });
  }
}

module.exports = { Formaciones };
