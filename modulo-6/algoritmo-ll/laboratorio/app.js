// Maquina Enigma

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//

var text = "buenos dias";
var text2 = "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";

// Buscar indices

var searchIndex = (str, value) => {

  for (var i = 0; i < str.length; i++) {
    if (str[i] === value) return i;
  }
  return -1;
};

// Encriptar y desencriptar

var encryptedText = (text, origin, destino) => {
  text = text.toLowerCase();
  var result = "";

  for (var i = 0; i < text.length; i++) {
    var index = searchIndex(origin, text[i]);
    if (index > -1) {
      result += destino[index];
    } else {
      result += text[i];
    }
  }
  return result;
};

// Desencriptar texto

// var decryptedText = (text) => {
//   text = text.toLowerCase();
//   var result = "";
//   for (var i = 0; i < text.length; i++) {
//     var index = searchIndex(encryptedAlphabet, text[i]);
//     if (index > -1) {
//       result += plainAlphabet[index];
//     } else {
//       result += text[i];
//     }
//   }
//   return result;
// };

// Opcional simplificar algoritmo (indexOf())

var indexOf = (text, origin, destino) => {

  text = text.toLowerCase();
  var result = "";

  for (var i = 0; i < text.length; i++) {
    if (origin.indexOf(text[i]) > -1) {
      result += destino[origin.indexOf(text[i])];
    } else {
      result += text[i];
    }
  }
  return result;
};

// devuelvo resultado por consola
console.log(encryptedText(text, plainAlphabet, encryptedAlphabet));
console.log("----------------------------------------");
// console.log(decryptedText(text2));

// Funciones de de los botones, primero cogemos el conteenido de textarea y lo guardamos
// en la variable flat. luego llamamos a la funcion que encripta o desencripta a dicha funcion
// le metemos los 3 parametros necesarios. lo que tenemos en flat, plainAlphabet encryptedAlphabet. 
var encryptButton = () => {
    var flat = document.getElementById("flat").value;
    document.getElementById("encrypte").value = encryptedText(flat, plainAlphabet, encryptedAlphabet);
};

var decryptButton = () => {
    var encrypted = document.getElementById("encrypte").value;
    document.getElementById("flat").value = encryptedText(encrypted, encryptedAlphabet, plainAlphabet);
};


var encryptButtonIndex = () => {
    var flat = document.getElementById("flat").value;
    document.getElementById("encrypte").value = indexOf(flat, plainAlphabet, encryptedAlphabet);
};

var decryptButtonIndex = () => {
    var encrypted = document.getElementById("encrypte").value;
    document.getElementById("flat").value = indexOf(encrypted, encryptedAlphabet, plainAlphabet);
};

// Eventos de los botones
document.getElementById("btn-encrypt").addEventListener("click", encryptButton);
document.getElementById("btn-decrypt").addEventListener("click", decryptButton);

document.getElementById("btn-encrypt-indexof").addEventListener("click", encryptButtonIndex);
document.getElementById("btn-decrypt-indexof").addEventListener("click", decryptButtonIndex);


// Generador Aleatorio
// Vamos a construir un generador aleatorio que permita escoger, de forma aleatoria,
// una cantidad determinada de números de entre un mínimo y un máximo.

var randomPick = (n, min, max) => {
    var range = (max - min) +1;
    var uno = 0;
    var result = [];

    for (var i = 1; i <= n; i++) {
        do {
            uno = Math.floor(Math.random() * range) + min;
        }while (result.indexOf(uno) !== -1);

        result.push(uno);
    }
    return result;
};

console.log(randomPick(10, 50, 100));

