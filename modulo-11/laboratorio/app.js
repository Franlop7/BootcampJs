const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 2,
    noches: 5,
    desayuno: true,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
    desayuno: false,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 4,
    desayuno: true,
  },
];

const precios = {
  standard: 100,
  suite: 150,
  tour: 100,
};

class ReservaHotel {
  constructor() {
    this._datos = [];
    this._precio = {};
    this._subtotal = 0;
    this._total = 0;
  }

  get datos() {
    return this._datos;
  }

  set datos(datosReserva) {
    this._datos = datosReserva;
    this.calcularSubtotal();
    this.calcularTotal();
  }

  set precio(precioReserva) {
    this._precio = precioReserva;
  }

  get precio() {
    return this._precio;
  }

  get subtotal() {
    this.calcularSubtotal();
    this.calcularTotal();
    return this._subtotal;
  }

  get total() {
    return this._total;
  }

  // EJERCICIO ADICIONAL

  calcularHabitaciones(habitacion) {
    return this._subtotal;
  }

  calcularDesayuno(habitacion) {
    return (habitacion.desayuno ? 15 : 0) * habitacion.pax;
  }

  precioHabitacion(tipoHabitacion) {
    return this._precio[tipoHabitacion];
  }

  calcularSubtotal() {
    this._subtotal = Number(
      this._datos
        .reduce(
          (acc, habitacion) => (acc += this.calcularHabitaciones(habitacion)),
          0
        )
        .toFixed(2)
    );
  }

  calcularTotal() {
    this._total = this._subtotal * 1.21;
  }
}

// DESAFÍO

class ClienteParticular extends ReservaHotel {
  constructor() {
    super();
  }

  calcularHabitacion(habitacion) {
    return habitacion.tipoHabitacion === "standard" ? 100 : 150;
  }

  calcularPersonasExtras(habitacion) {
    const personasExtras = 40;
    return habitacion.pax > 1 ? (habitacion.pax - 1) * personasExtras : 0;
  }

  calcularHabitaciones(habitacion) {
    return (
      habitacion.noches *
      (super.precioHabitacion(habitacion.tipoHabitacion) +
        this.calcularPersonasExtras(habitacion) +
        super.calcularDesayuno(habitacion))
    );
  }

  calcularTotal() {
    this._total = Number((this._subtotal * 1.21).toFixed(2));
  }
}

class TourOperador extends ReservaHotel {
  constructor() {
    super();
  }

  calcularHabitaciones(habitacion) {
    return (
      habitacion.noches *
      (super.precioHabitacion("tour") + super.calcularDesayuno(habitacion))
    );
  }

  calcularTotal() {
    this._total = Number((this._subtotal * 0.85 * 1.21).toFixed(2));
  }
}

const reservaParticular = new ClienteParticular();
reservaParticular.datos = reservas;
reservaParticular.precio = precios;
console.log("Reserva particular");
console.log(`El Subtotal de su reserva es: ${reservaParticular.subtotal}€`);
console.log("-----------------------------------");
console.log(`El Total de su reserva: ${reservaParticular.total}€`);

console.log("***********************************");

const reservaTour = new TourOperador();
reservaTour.datos = reservas;
reservaTour.precio = precios;
console.log("Reserva tour");
console.log(`El Subtotal de su reserva es: ${reservaTour.subtotal}€`);
console.log("-----------------------------------");
console.log(`El Total de su reserva: ${reservaTour.total}€`);
