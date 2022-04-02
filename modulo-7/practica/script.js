// Ejercicios
// Validar un IBAN

// CASO 1, Dado este IBAN: ES6600190020961234567890
// Validar que se informa con dos letras, y los números correspondientes.

// asi seria ese IBAN concretamente

const pattern = /^ES6600190020961234567890$/;// /^ES\d{22}$/; Asi seria valido para cualquier IBAN que empiece por ES (de españa).

const values = ['ES6600190020961234567890'];

values.forEach(value => {
  console.log("la expresion" + value + " -> ", pattern.test(value));
});

// CASO 2, Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida 
// estás dos cadenas:
// ES6600190020961234567890
// ES66 0019 0020 9612 3456 7890
// he dado la opcion de que asi ES66 0019 0020 9612 34567890 o sin dejar espacios en algunos mas 
// tambien sea true.
// si se quiere o todo junto o con espacios tal cual aparece solo hay que quitar los ?

const pattern1 = /^ES\d{22}|ES\d{2}\s?(\d{4}\s?){4}\d{4}$/;

const values1 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

values1.forEach(value => {
  console.log("El IBAN " + value + " -> ", pattern1.test(value));
});

//  CASO 3, Vamos a extraer el código de páis y el dígito de control.

const pattern2 = /^(ES\d{2})\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;

const values2 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

values2.forEach(value => {
  console.log("El IBAN " + value + " -> ", pattern2.exec(value));
});

// Validar matrícula coche

// Caso 1, Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:
// 2021 GMD
// 2345-GMD
// 4532BDB
// 0320-AAA

const pattern3 = /^\d{4}(\s?|-?)[A-Z]{3}$/i;

const values3 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

values3.forEach(value => {
  console.log("las matriculas " + value + " -> ", pattern3.test(value));
});

// Caso 2, Vamos a extraer por un lado la parte numérica y por otro las letras.

const pattern4 = /^(\d{4})(\s?|-?)([A-Z]{3})$/i;

const values4 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

values4.forEach(value => {
  // console.log("la expresion" + value + " -> ", pattern.test(value));
  console.log("El IBAN " + value + " -> ", pattern4.exec(value));
});

// ---------------------------------------------------------------

// OPCIONALES

// Extraer imágenes de un fichero HTML

// Una utilidad divertida es implementar una aspiradora de imagenes, es decir de un HTML extraer 
// de todos los tags img el contenido de src en ese contenido tenemos las URL a las imágenes.
// CASO 1, De una sola linea extraer el contenido de src:

/* <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/> */

const pattern5 = /^<img\s?src=".{1,}\.(png|jpg)"\s?\/>$/i;

const values5 = `<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>`;

console.log(values5.match(pattern5));

// CASO 2, De un HTML extraer todos los src de todos los objetos img:

const pattern6 = /<img\s?src="([\/\:A-Z0-9\.\/_-]+)"\s?$/gim;

const values6 = `<<html>
<body>
<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
/>
<h1>ejemplo</h1>
<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
/> </body>
</html>`;

console.log(values6.match(pattern6));


// VALIDAR SINTAXIS TARJETA DE CRÉDITO

// Caso 1, Vamos a validar los siguiente formatos: 5299 6400 0000 0000 5299-6400-0000-0000 
// 5299640000000000

// de esta forma tambien acepta mezclas de espacios o - ejemplo 529964000000 0000
// si la practiva busca solo las formas permitidas las que pone pues seria como lo puse.
// const pattern = /^(\d{4}(\s|-)?){3}\d{4}$/;

const pattern7 = /(^(\d{4}\s){3}\d{4}$)|(^(\d{4}-){3}\d{4}$)|(^\d{16}$)/;

const values7 = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

values7.forEach(value => {
  console.log("la expresion " + value + " -> ", pattern7.test(value));
});

// CASO 2, vamos a extraer cada grupo de 4 digitos

const pattern8 = /^(5[0-5]\d{2})[\s-]?(\d{4})[\s-]?(\d{4})[\s-]?(\d{4})$/;
const values8 = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

values8.forEach(value => {
  // console.log("la expresion " + value + " -> ", pattern.test(value));
  console.log("El IBAN " + value + " -> ", pattern8.exec(value));
});

// BUSCAR EXPRESIONES REGULARES

// Complejo: que tenga al menos los siguiente caracteres: una minuscula, una mayuscula, 
// un numero y un caracter especial.

const pattern9 = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/;
const values9 = ['75aF2@5+'];

values9.forEach(value => {
  console.log("la expresion " + value + " -> ", pattern9.test(value));
  // console.log("El IBAN " + value + " -> ", pattern.exec(value));
});


// Moderado: Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, 
// un numero y al menos 8 caracteres de longitud.

const pattern10 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;
const values10 = ['rF351623'];

values10.forEach(value => {
  console.log("la expresion " + value + " -> ", pattern10.test(value));
  // console.log("El IBAN " + value + " -> ", pattern.exec(value));
});

// Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net ó 
// www.lemoncode.net ó lemoncode.net).

const pattern11 = /^(?:https:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
const values11 = ['https://www.lemoncode.net', 'www.lemoncode.net', 'lemoncode.net'];

values11.forEach(value => {
  console.log("la expresion " + value + " -> ", pattern11.test(value));
  // console.log("El IBAN " + value + " -> ", pattern.exec(value));
});

// Validar que un color en Hexadecimal esta bien formado.

const pattern12 = /^#([a-fA-F]|[0-9]){3,6}$/;
const values12 = ['#FC33FF'];

values12.forEach(value => {
  console.log("la expresion " + value + " -> ", patter12.test(value));
  // console.log("El IBAN " + value + " -> ", pattern.exec(value));
});

