// Suma
function suma() {
  var resultado;

  // Obtener numero primer input
  var numero1 = parseInt(document.getElementById("input-number1").value);
  resultado = numero1;

  // Obtener numero segundo input
  var numero2 = parseInt(document.getElementById("input-number2").value);
  resultado = numero1 + numero2;

  // Pintamos el resultado de la suma
  document.getElementById("result").innerText = resultado;
}

// Resta
function res() {
  var resultado;

  // Obtener numero primer input
  var numero1 = parseInt(document.getElementById("input-number1").value);
  resultado = numero1;

  // Obtener numero segundo input
  var numero2 = parseInt(document.getElementById("input-number2").value);
  resultado = numero1 - numero2;

  // Pintamos el resultado de la suma
  document.getElementById("result").innerText = resultado;
}

// Resta
function mult() {
    var resultado;
  
    // Obtener numero primer input
    var numero1 = parseInt(document.getElementById("input-number1").value);
    resultado = numero1;
  
    // Obtener numero segundo input
    var numero2 = parseInt(document.getElementById("input-number2").value);
    resultado = numero1 * numero2;
  
    // Pintamos el resultado de la suma
    document.getElementById("result").innerText = resultado;
  }

  // Resta
function div() {
    var resultado;
  
    // Obtener numero primer input
    var numero1 = parseInt(document.getElementById("input-number1").value);
    resultado = numero1;
  
    // Obtener numero segundo input
    var numero2 = parseInt(document.getElementById("input-number2").value);
    resultado = numero1 / numero2;
  
    // Pintamos el resultado de la suma
    document.getElementById("result").innerText = resultado;
  }

// Si alguno de los operandos es vacío, muestra como resultado "Error"
function notNumber() {
    if (isNaN(document.getElementById("input-number1").value) || isNaN(document.getElementById("input-number2").value)) {
        document.getElementById("result").innerText = "Error, debes introducer dos números";
    }
}

// Registramos la funcion suma() bajo el evento click del boton +
document.getElementById("button-sum").addEventListener("click", suma);
document.getElementById("button-res").addEventListener("click", res);
document.getElementById("button-mult").addEventListener("click", mult);
document.getElementById("button-div").addEventListener("click", div);
document.getElementById("button-sum").addEventListener("click", notNumber);
document.getElementById("button-res").addEventListener("click", notNumber);
document.getElementById("button-mult").addEventListener("click", notNumber);
document.getElementById("button-div").addEventListener("click", notNumber);


