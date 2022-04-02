// Calculadora de cambio óptimo de billetes y monedas

// Recursos
var cashRegister = [
  {
    id: "billetes",
    valor: 200,
    quantity: 0,
    cash: 3,
  },
  {
    id: "billetes",
    valor: 100,
    quantity: 0,
    cash: 3,
  },
  {
    id: "billetes",
    valor: 50,
    quantity: 0,
    cash: 6,
  },
  {
    id: "billetes",
    valor: 20,
    quantity: 0,
    cash: 7,
  },
  {
    id: "billetes",
    valor: 10,
    quantity: 0,
    cash: 13,
  },
  {
    id: "billetes",
    valor: 5,
    quantity: 0,
    cash: 19,
  },
  {
    id: "moneda",
    valor: 2,
    quantity: 0,
    cash: 10,
  },
  {
    id: "moneda",
    valor: 1,
    quantity: 0,
    cash: 25,
  },
  {
    id: "moneda",
    valor: 0.5,
    quantity: 0,
    cash: 15,
  },
  {
    id: "moneda",
    valor: 0.2,
    quantity: 0,
    cash: 15,
  },
  {
    id: "moneda",
    valor: 0.1,
    quantity: 0,
    cash: 15,
  },
  {
    id: "moneda",
    valor: 0.05,
    quantity: 0,
    cash: 15,
  },
  {
    id: "moneda",
    valor: 0.02,
    quantity: 0,
    cash: 15,
  },
  {
    id: "moneda",
    valor: 0.01,
    quantity: 0,
    cash: 15,
  },
];

// Calcular la diferencia precio total productos entre cantidad entregada

var refund = () =>
  (
    Number(document.getElementById("quantity-delivered").value) -
    Number(document.getElementById("total-price").value)
  ).toFixed(2);

// Cambio de los billetes y monedas

var change = () => {
  var diference = refund();
  // console.log(diference);
  for (var unit in cashRegister) {
    if (diference / cashRegister[unit].valor >= 1) {
      cashRegister[unit].quantity = Math.floor(
        diference / cashRegister[unit].valor
      );
      // este es el condicional para que de el cambio segun el stock de lo que tenga en la caja
      if (cashRegister[unit].quantity > cashRegister[unit].cash) {
          cashRegister[unit].quantity = cashRegister[unit].cash;
      }
      diference -= cashRegister[unit].valor * cashRegister[unit].quantity;
      
      console.log(diference);

      console.log(
        "A devolver " +
          cashRegister[unit].quantity +
          " " +
          cashRegister[unit].id +
          " de " +
          cashRegister[unit].valor +
          "€"
      );

      showResult(cashRegister[unit]);
    }
    if (diference === 0) {
      break;
    }
  }
};

// mostramos el resultado en el HTML

var showResult = (unit) => {
    div = document.createElement("div");
    div.classList.add(unit.id);
    div.innerHTML += unit.valor;
    div.innerHTML += " x " + unit.quantity;
    document.getElementById("result");
    result.appendChild(div);
  };


// evento del boton

document.getElementById("btn-calculate").addEventListener("click", change);
