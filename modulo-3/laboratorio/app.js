// Ejercicio. Lo hice de las dos formas por que no me quedo claro si solo existian esos 3 tipos de productos
// o si todo tiene el 21 menos esos dos productos concretamente.

// const product = { count: 2, price: 12.55, type: "libro"};

// let total;

// if (product.count > 0 && product.type == "ropa") {
//     total = ((product.count * product.price) * 0.21) + (product.count * product.price);
//     console.log("La ropa asciende a un total:", total, "€ IVA incluido");
// }else if (product.count > 0 && product.type == "alimentacion") {
//     total = ((product.count * product.price) * 0.10) + (product.count * product.price);
//     console.log("La alimentacion asciende a un total:", total, "€ IVA incluido");
// }else if (product.count > 0 && product.type == "libro") {
//     total = ((product.count * product.price) * 0.04) + (product.count * product.price);
//     console.log("Los libros asciende a un total:", total, "€ IVA incluido");
// }else {
//     console.log("El total es: 0");
// };

// segunda opcion.

// if (product.count > 0) {
//     total = product.count * product.price
// }else {
//     total = 0;
// };
// console.log("Precio total sin iva es de:", total, "€");

// let tipoIva;

// switch (product.type) {
//     case "alimentacion":
//         tipoIva = 0.10;
//         break;
//     case "libro":
//         tipoIva = 0.04;
//         break;
//     default: tipoIva = 0.21;
// };

// const iva = total * tipoIva;

// console.log("El precio total con iva asciende a:", total + iva, "€");

// Extra 1: calcular sueldo neto en nómina

// const empleado = {
//     bruto: 20000,
//     hijos: 0,
//     pagas: 14
// };

// let retencion;
// let totalBruto;

// if (empleado.bruto < 12000) {
//     if (empleado.hijos > 0) {
//         retencion = empleado.bruto * 0.02;
//         totalBruto = empleado.bruto + retencion;
//         console.log("Su sueldo neto es de:", totalBruto, "€ anual");
//     }else
//     console.log("Su sueldo neto es de:",  empleado.bruto, "€ anual");
// }else if (empleado.bruto < 24000) {

//     if (empleado.hijos > 0) {
//         retencion = empleado.bruto * 0.06;
//         totalBruto = empleado.bruto - retencion;
//         console.log("Su sueldo neto con una retencion del 6% gracias a la bonificacion del 2% por tener hijo/os asciende a:", totalBruto, "€ anual");
//     }else {
//         retencion = empleado.bruto * 0.08;
//         totalBruto = empleado.bruto - retencion;
//         console.log("Su sueldo neto con una retencion del 8% asciende a:", totalBruto, "€ anual");
//     };

// }else if (empleado.bruto < 34000) {

//     if(empleado.hijos > 0) {
//        retencion = empleado.bruto * 0.14;
//        totalBruto = empleado.bruto - retencion;
//        console.log("Su sueldo neto con una retencion del 14% gracias a la bonificacion del 2% por tener hijo/os asciende a:", totalBruto, "€ anual");
//     }else {
//         retencion = empleado.bruto * 0.16;
//         totalBruto = empleado.bruto - retencion;
//         console.log("Su sueldo neto con una retencion del 16% asciende a:", totalBruto, "€ anual");
//     };

// }else if (empleado.bruto >= 34000) {

//     if (empleado.hijos > 0) {
//         retencion = empleado.bruto * 0.28;
//         totalBruto = empleado.bruto - retencion;
//         console.log("Su sueldo neto con una retencion del 28% gracias a la bonificacion del 2% por tener hijo/os asciende a:", totalBruto, "€ anual");
//     }else {
//         retencion = empleado.bruto * 0.30;
//         totalBruto = empleado.bruto - retencion;
//         console.log("Su sueldo neto con una retencion del 30% asciende a:", totalBruto, "€ anual");
//     };

// };

// if (empleado.pagas == 14) {
//     console.log("Su sueldo neto mensual en 14 pagas asciende:", totalBruto / empleado.pagas, "€");
// }else {
//     console.log("Su sueldo neto mensual en 12 pagas asciende:", totalBruto / 12, "€");
// };

// Ejercicios Extras
//1º Dado el siguiente objeto. Escribir en una variable un día de la semana y decir cual asignatura toca ese día.
const uno = {
  day: "Lunes",
  subject: "Matemáticas",
};

const dos = {
  day: "Martes",
  subject: "Lengua",
};

const tres = {
  day: "Miércoles",
  subject: "Física",
};

const cuatro = {
  day: "Jueves",
  subject: "Química",
};

const cinco = {
  day: "Viernes",
  subject: "Gimnasia",
};

let diaSemana = "Miércoles";

switch (diaSemana) {
  case "Lunes":
    if (diaSemana === uno.day) {
      console.log("Hoy es", diaSemana, "y toca", uno.subject);
    }
    break;
  case "Martes":
    if (diaSemana === dos.day) {
      console.log("Hoy es", diaSemana, "y toca", dos.subject);
    }
    break;
  case "Miércoles":
    if (diaSemana === tres.day) {
      console.log("Hoy es", diaSemana, "y toca", tres.subject);
    }
    break;
  case "Jueves":
    if (diaSemana === cuatro.day) {
      console.log("Hoy es", diaSemana, "y toca", cuatro.subject);
    }
    break;
  case "Viernes":
    if (diaSemana === cinco.day) {
      console.log("Hoy es", diaSemana, "y toca", cinco.subject);
    }
    break;
  default:
}

// 2º Según una variable llamada hora , mostrar un buenos días, buenas tardes o buenas noches según la hora.
// Se utilizarán los tramos de 6 a 12, de 13 a 20 y de 21 a 5. Solo se tienen en cuenta la hora no los minutos.

let hora = 7;

if (hora >= 6 && hora <= 12) {
  console.log("Buenos dias");
} else if (hora >= 13 && hora <= 20) {
  console.log("Buenas tardes");
} else if ((hora >= 21 && hora <= 24) || (hora <= 5 && hora >= 0)) {
  console.log("Buenas noches");
} else {
  console.log("La hora introducida es incorrecta");
}

// 3º Dada una variable que se llame diaSemana , que contenga un número del 1 al 7 mostrar el día de la semana correspondiente.
// let diaSemana = 5;

// switch (diaSemana) {
//   case 1:
//     console.log("Lunes");
//     break;
//   case 2:
//     console.log("Martes");
//     break;
//   case 3:
//     console.log("Miercoles");
//     break;
//   case 4:
//     console.log("Jueves");
//     break;
//   case 5:
//     console.log("Viernes");
//     break;
//   case 6:
//     console.log("Sabado");
//     break;
//   case 7:
//     console.log("domingo");
//     break;
//   default:
//     console.log("Debes introducir un número del 1 al 7");
// };

// 4º Calcula la media de tres notas y muestra si está apta, no apta, notable o sobre saliente. - Una persona está apta con un 5. - Una persona no apta de menos de un 5. - Notable de 5 a 7. - Sobre saliente de 7 al 10.

let nota1 = 7;
let nota2 = 7;
let nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("Su nota es de:", media, "No apto");
}

if (media == 5) {
  console.log("Su nota es de:", media, "Eres apto");
}

if (media > 5 && media <= 7) {
  console.log("Su nota es de:", media, "Notable");
}

if (media > 7 && media <= 10) {
  console.log("Su nota es de:", media, "Sobresaliente");
}

// 5º Según una variable dia y otra mesNacimiento , calcular el horóscopo de la persona. 
// He tenido varios problemas decidi crear una variable horoscopo vacia para no tener que escribir
// tantas veces el console.log. El inconveniente que tuve fue porqe no puse else a los if
// y eso me hacia que algunas fechas no las cogiese bien y me daba el console log en blanco,
// entonces fue cuando prove a poner else añadiendo el horoscopo del siguiente if y funciono.
// gracias al debugear el codigo me di cuenta de ello.
let dia = 22;
let mesNacimiento = 12;
let horoscopo = "";

switch (mesNacimiento) {
  case 1:
    if (dia < 21) {
      horoscopo = "Capricornio";
    } else {
      horoscopo = "Acuario";
    }
    break;
  case 2:
    if (dia < 20) {
      horoscopo = "Acuario";
    } else {
      horoscopo = "Piscis";
    }
    break;
  case 3:
    if (dia < 21) {
      horoscopo = "Piscis";
    } else {
      horoscopo = "Pries";
    }
    break;
  case 4:
    if (dia < 21) {
      horoscopo = "Aries";
    } else {
      horoscopo = "Tauro";
    }
    break;
  case 5:
    if (dia < 20) {
      horoscopo = "Tauro";
    } else {
      horoscopo = "Géminis";
    }
    break;
  case 6:
    if (dia < 22) {
      horoscopo = "Géminis";
    } else {
      horoscopo = "Cáncer";
    }
    break;
  case 7:
    if (dia < 22) {
      horoscopo = "Cáncer";
    } else {
      horoscopo = "Leo";
    }
    break;
  case 8:
    if (dia < 24) {
      horoscopo = "Leo";
    } else {
      horoscopo = "Virgo";
    }
    break;
  case 9:
    if (dia < 23) {
      horoscopo = "Virgo";
    } else {
      horoscopo = "Libra";
    }
    break;
  case 10:
    if (dia < 23) {
      horoscopo = "Libra";
    } else {
      horoscopo = "Escorpio";
    }
    break;
  case 11:
    if (dia < 23) {
      horoscopo = "Escorpio";
    } else {
      horoscopo = "Sagitario";
    }
    break;
  case 12:
    if (dia < 21) {
      horoscopo = "Sagitario";
    } else {
      horoscopo = "Capricornio";
    }
    break;
  default:
};

console.log("Su horóscopo es:", horoscopo);
//6º Según una variable llamada numero , calcule si es par o inpar.
let numero = 7;

if (numero % 2 == 0) {
  console.log("Su numero es el:", numero, "es par");
}else {
  console.log("Su numero es el:", numero, "es impar");
};

// 7º Usa una variable y di si es positivo o negativo.
// no estoy seguro si esto es lo que pide el ejercicio
// tambien se que esta la funcion math.sign(), que retorna el signo de un numero
// indicando si es positivo negativo o cero, tambien se podria hacer con el.
// let numero = 111;

// if (numero > 0) {
//     console.log("Su numero es el:", numero, "es un numero positivo");
// }else {
//     console.log("Su numero es el:", numero, "es un numero negativo");
// };

// 8º Di si un número es mayor de 100.
// let numero = 150;

// if (numero > 100) {
//   console.log("Su numero es:", numero, "y es mayro que 100");
// } else {
//   console.log("Su numero es:", numero, "y es menor que 100");
// };

// 9º Usa 3 variables que contengan un número y di si el tercero es igual a la suma del primero y el segundo.
let numero1 = 2;
let numero2 = 5;
let numero3 = 7;

if (numero3 == numero1 + numero2) {
  console.log(
    "Numero3 es:",
    numero3,
    "y es gual a la suma de",
    "numero1",
    numero1,
    "+",
    "numero2",
    numero2
  );
} else {
  console.log("Numero3 es diferente a la suma de numero1 + numero2");
}

// 10ª Según los siguientes objetos.
//Calcular su área según el tipo de figura geométrica.

var square = {
  sideOne: 7,
  sideTwo: 3,
  typeOfGemotricFigure: "Cuadrado",
};

var circle = {
  radius: 2,
  typeOfGemotricFigure: "Circulo",
};

let pi = 3.14;
let tipoFigura = "Circulo";

let areaCuadrado = square.sideOne * square.sideTwo;
let areaCirculo = pi * circle.radius * circle.radius;

if (tipoFigura == square.typeOfGemotricFigure) {
  console.log("El área del", square.typeOfGemotricFigure, "es:", areaCuadrado);
} else if (tipoFigura == circle.typeOfGemotricFigure) {
  console.log("El área del", circle.typeOfGemotricFigure, "es:", areaCirculo);
}
