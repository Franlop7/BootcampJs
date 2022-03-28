// Declatacion variables
var result = 0;
var operation = "+";

// Obtengo el valor del input
var getInput = () => parseInt(document.getElementById("input").value);

// Limpiamos el input
var cleanInput = () => document.getElementById("input").value = "";

// Calculos
function calculation(operationString) {
    switch (operation) {
        case "+":
            result = result + getInput();
            break;
        case "-":
            result = result - getInput();
            break;
        case "*":
            result = result * getInput();
            break;
        case "/":
            result = result / getInput();
            break;
    }
    document.getElementById("result").innerHTML = result;
    operation = operationString;
    cleanInput();
}

// resultado final al darle al boton =
var equal = () => calculation();

// Eventos
document.getElementById("button-sum").addEventListener("click", () => calculation('+'));
document.getElementById("button-res").addEventListener("click", () => calculation('-'));
document.getElementById("button-mult").addEventListener("click", () => calculation('*'));
document.getElementById("button-div").addEventListener("click", () => calculation('/'));
document.getElementById("button-resul").addEventListener("click", () => equal());