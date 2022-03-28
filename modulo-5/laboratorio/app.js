const carrito = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
  },
];

// Mostrar el carrito de la compra / listar todos los productos

for (carritoCompra of carrito) {
    imprimir(carritoCompra);
};


function imprimir (carritoCompra) {
    console.log("-----------------");
    for (attr in carritoCompra) {
        console.log(attr + ": " + carritoCompra[attr]);
    };
};

// eliminar el producto con id 54657 del carrito de la compra
var indice;

for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id == 54657) {
        indice = i;
    };
};

carrito.splice(indice, 1);



// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
let total = 0;
for (carro of carrito) {
    total += carro.price * carro.count;
};
console.log("-----------------");
console.log("Total es : " + total + "€");

// Filtrar por los productos que sean prime.
for (carritoCompra of carrito) {
    if (carritoCompra.premium) imprimir(carritoCompra);
};

// Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío",
//  si no "Este pedido tiene gastos de envío".
var y = 0;
var productoPrem = true;
var nota;

do {
    if (!carrito[y].premium) productoPrem = false;
    y++;

}while (y < carrito.length && productoPrem);

productoPrem ? nota = "Pedido sin gastos de envio" : nota = "Este pedido tiene gastos de envio";
console.log(nota);



// Mostrar el carrito en un listado de html básico.
document.write("<h1>Su carrito</h1>");
for (product of carrito) {
    document.write("<ul>")
    document.write("<li>" + "Id: " + product.id + "</li>")
    document.write("<li>" + "Name: " + product.name + "</li>")
    document.write("<li>" + "Price: " + product.price + "</li>")
    document.write("<li>" + "Count: " + product.count + "</li>")
    document.write("<li>" + "Premium: " + product.premium + "</li>")
    document.write("</ul>")
};

// Aplicar un descuento del 5% si la compra es mayor de 100 €.
if (total > 100) {
    console.log("Total sin descuento", total, "€");
    total = total - (total * 0.05);
    console.log("Total con 5% de descuento es de:", total, "€");
}else {
    console.log("Total", total, "€");
};
