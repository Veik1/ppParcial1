const { Vagones } = require("./Vagones.js");

class VagonPasajeros extends Vagones {
  #largo;
  #ancho;
  #tieneBanios;
  #estaOrdenada;
  #maximoPasajeros;
  #maximaCarga;

  constructor(unLargo, unAncho, unBanio, unOrden) {
    super(0); // necesito llamar al padre, no me queda otra, si lo borro, capút.
    this.#largo = unLargo;
    this.#ancho = unAncho;
    this.#tieneBanios = unBanio;
    this.#estaOrdenada = unOrden;
    this.#maximoPasajeros = this.calcMaximoPasajeros();
    this.#maximaCarga = this.calcMaximaCarga();
  }

  ordenar(unOrden) {
    this.#estaOrdenada = true;
    this.#maximoPasajeros = this.calcMaximoPasajeros();
  }

  verSiTieneBanio() {
    return this.#tieneBanios;
  }

  verLaMaximaCarga() {
    return this.#maximaCarga;
  }

  calcMaximoPasajeros() {
    let maximoPasajerosPorMetro = this.#ancho <= 3 ? 8 : 10;
    let maximoPasajeros = maximoPasajerosPorMetro * this.#largo;
    if (!this.#estaOrdenada) {
      maximoPasajeros -= 15;
    }
    return maximoPasajeros;
  }

  calcMaximaCarga() {
    return this.#tieneBanios ? 300 : 800;
  }

  maximoPeso() {
    const pesoInicial = 2000;
    const pesoPorPasajero = 80;
    return (
      pesoInicial + pesoPorPasajero * this.#maximoPasajeros + this.#maximaCarga
    );
  }

  verCantidadPasajeros() {
    return this.#maximoPasajeros;
  }
}

module.exports = { VagonPasajeros };
