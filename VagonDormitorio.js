const { Vagones } = require("./Vagones.js");

class VagonDormitorio extends Vagones {
  #compartimientos;
  #camasPorCompartimiento;
  #maximoPasajeros;

  constructor(compartimientos, camasPorCompartimiento) {
    super(0);
    this.#compartimientos = compartimientos;
    this.#camasPorCompartimiento = camasPorCompartimiento;
    this.#maximoPasajeros = this.calcMaximoPasajeros();
  }

  calcMaximoPasajeros() {
    return this.#compartimientos * this.#camasPorCompartimiento;
  }

  maximaCarga() {
    return 1200;
  }

  maximoPeso() {
    const pesoInicial = 4000;
    const pesoPorPasajero = 80;
    return pesoInicial + pesoPorPasajero * this.calcMaximoPasajeros() + 1200;
  }

  verCantidadCompartimientos() {
    return this.#compartimientos;
  }

  verCantidadCamasPorCompartimiento() {
    return this.#camasPorCompartimiento;
  }

  verSiTieneBanio() {
    return true;
  }

  tienePasajeros() {
    return this.calcMaximoPasajeros() > 0;
  }

  verCantidadPasajeros(){
    return this.#maximoPasajeros;
  }

}

module.exports = { VagonDormitorio };
