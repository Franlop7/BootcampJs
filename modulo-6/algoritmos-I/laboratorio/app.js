// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

// 1. Generar HTML de forma dinamica
var createQuantity = product => {
    var quantity = document.createElement("input");
    quantity.setAttribute("type", "number");
    quantity.setAttribute("name", product.description);
    quantity.setAttribute("min", 0);
    quantity.setAttribute("max", product.stock);
    // quantity.setAttribute("value", "0");
    quantity.addEventListener("change", event => product.units = event.target.valueAsNumber);
    return quantity;
};

var showProductList = (productList) => {
    var containerList = document.getElementById("container");

    for (var product of productList) {
        var description = document.createElement("li");
        description.setAttribute("class", "container-item");

        description.innerHTML = product.description + " - " + product.price + "€";
        containerList.appendChild(description);
        description.appendChild(createQuantity(product));
    }
};

// Calcular subtotal
var subTotal = () => {
    var total = 0;
    for (var product of products) {
        total += product.price * product.units;
    };
    console.log(total);
    return total;  
};

// Calcular iva
var iva = () => {
    var iva = 0;
    for (var product of products) {
        iva += product.price * product.units * product.tax / 100;
    };
    return iva;
};

// Total = subtotal + iva
var total = () => subTotal() + iva();

// evento de pintar el html con los datos del array/objetos
showProductList(products);

// eveto
var buttonCalculate = () => {
    document.getElementById("subtotal").innerHTML = subTotal() + "€";
    document.getElementById("iva").innerHTML = iva() + "€";
    document.getElementById("total").innerHTML = total() + "€";

};

// evento del boton
document.getElementById("btn").addEventListener("click", buttonCalculate);

// Extra
// Si las unidades de todos los productos están a 0, el botón calcular se deshabilita.
// Si existe al menos 1 producto con 1 unidad seleccionada, el botón calcular se deberá habilitar

var disableButton = (unit) => {
    var button = document.getElementById("btn");
    button.disabled = unit <= 0;
};

var buttonDisable = () => {
    var unit = 0;
    for (var i = 0; i < products.length; i++) {
        if (products[i].units > 0) unit += products[i].units;
    };
    disableButton(unit);
}



document.addEventListener("change", buttonDisable);