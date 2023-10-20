class Vagones {
  #cantidadPasajeros;
  constructor(unaCantidad) {
    this.#cantidadPasajeros = unaCantidad;
  }

  verCantidadPasajeros() {
    return this.#cantidadPasajeros; // ver cuantos puedo meter en un vagón
  }

  tienePasajeros() {
    return this.#cantidadPasajeros > 0;
  }
}

module.exports = { Vagones };
