// Obtengo el valor de los inputs
var getInputA = () => parseInt(document.getElementById("input-a").value);
var getInputB = () => parseInt(document.getElementById("input-b").value);

// Hacemos los calculos
var sum = (number1, number2) => number1 + number2;
var res = (number1, number2) => number1 - number2;
var mul = (number1, number2) => number1 * number2;
var div = (number1, number2) => number1 / number2;

// Pintamos el resultado
var setResult = (result) => {
    document.getElementById("result").innerHTML = result;
}

// Eventos
document.getElementById("button-sum").addEventListener("click", function() {
    setResult(sum(getInputA(), getInputB()));
})
document.getElementById("button-res").addEventListener("click", function() {
    setResult(res(getInputA(), getInputB()));
})
document.getElementById("button-mult").addEventListener("click", function() {
    setResult(mul(getInputA(), getInputB()));
})
document.getElementById("button-div").addEventListener("click", function() {
    setResult(div(getInputA(), getInputB()));
})
// document.getElementById("button-sum").addEventListener("click", notNumber);

// Si alguno de los operandos es vacío, muestra como resultado "Error"
// function notNumber() {
//     if (isNaN(getInputA) || isNaN(getInputB)) {
//         document.getElementById("result").innerHTML = "Error, debes introducir dos numeros";
//     }
// }


