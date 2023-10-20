const { Vagones } = require("./Vagones.js");

class VagonCarga extends Vagones {
  #cargaMaximaIdeal;
  #maderasSueltas;
  #tieneBanios;

  constructor(cargaMaximaIdeal, maderasSueltas) {
    super(0);
    this.#cargaMaximaIdeal = cargaMaximaIdeal;
    this.#maderasSueltas = maderasSueltas;
    this.#tieneBanios = false;
  }

  calcMaximaCarga() {
    return this.#cargaMaximaIdeal - 400 * this.#maderasSueltas;
  }

  maximoPeso() {
    const pesoInicial = 1500;
    return pesoInicial + this.calcMaximaCarga();
  }

  verCantidadMaderasSueltas() {
    return this.#maderasSueltas;
  }

  puedeTransportarCarga() {
    return this.#cargaMaximaIdeal > 1000;
  }

  tienePasajeros() {
    return false;
  }

  verSiTieneBanio() {
    return this.#tieneBanios;
  }

  arreglarMaderasSueltas() {
    this.#maderasSueltas = Math.max(0, this.#maderasSueltas - 2);
  }
}

module.exports = { VagonCarga };
