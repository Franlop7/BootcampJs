// Obtenemos datos de los selec y input
var getHotel = () => {
  var typeBooking = document.getElementById("room").value;
  var spa = document.getElementById("spa").checked;
  var typeOccupation = document.getElementById("occupation-room").value;
  let rate;

  // Obtenemos el precio segun el tipo de reserva
  switch (typeBooking) {
    case "standard":
      rate = 100;
      break;
    case "junior":
      rate = 120;
      break;
    case "suite":
      rate = 150;
      break;
  }
  // Obtenemos el precio del spa
  rate = spa ? rate + 20 : rate;

  // Obtenemos el precio segun el tipo de ocupacion
  switch (typeOccupation) {
    case "individual":
      rate = rate * 0.75;
      break;
    case "double":
      break;
    case "triple":
      rate = rate * 1.25;
      break;
  }
  // Obtenemos datos de numeros de noches y numero de parking de los input usamos
  // parseInt para que nos devuelva un numero, ya que los inputs siempre devuelven un string.
  var numberNight = parseInt(document.getElementById("night").value);
  var nightparking = parseInt(document.getElementById("parking").value) * 10;

  // Obtener el precio final
  let finalPrice = rate * numberNight;
  finalPrice = finalPrice + nightparking;

  // pintar precio final y dar error si se dejo algun campo sin poner de los obligatorios
 
  finalPrice
    ? (document.getElementById("price").innerHTML =
        "El precio es:" + finalPrice + "€")
    : (document.getElementById("price").innerHTML =
        "Error introduzca todos los datos necesarios");
};

// Eventos
document.getElementById("room").addEventListener("change", function() {getHotel()});
document.getElementById("spa").addEventListener("change", function() {getHotel()});
document.getElementById("occupation-room").addEventListener("change", function() {getHotel()});
document.getElementById("night").addEventListener("change", function() {getHotel()});
document.getElementById("parking").addEventListener("change", function() {getHotel()});
