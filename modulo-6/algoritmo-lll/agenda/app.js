// Módulo 6 - Algoritmos - Ejercicios para Practicar

// UTILIDADES
// Antes de empezar con los ejercicios, una pequeña explicación. En el codigo de estos ejercicios
// encontrarás lo siguiente: Crear un array vacío de longitud n:

var myEmptyArray = new Array(3); // Array vacio de 3 posiciones
//console.log(myEmptyArray); // [empty x 3]

// Rellenar todas las posiciones de un array con el mismo valor:

var myArray = new Array(3); // Array vacio de 3 posiciones.
myArray.fill("Hola");
//console.log(myArray); // ["Hola", "Hola", "Hola]

// En una sola línea equivaldría a:

var myArray = new Array(3).fill("Hola");
//console.log(myArray); // ["Hola","Hola","Hola"]

// AGENDA

// Vamos a implementar una agenda para un equipo de personas, de modo que nos indique que horas
// tienen libres y que horas están ocupados. Además, vamos a generar un algoritmo que haga una
// búsqueda en un equipo y determine cual es la primera hora en que todos los miembros del equipo
// están libres, para asi poder establecer una reunión. Es decir, que busque el primer hueco
// disponible en sus agendas.

// Interfaz

// Para este ejemplo usaremos la consola así que no necesitaremos interfaz gráfica.

// Datos

// Te proponemos que partas de las siguientes estructuras de datos:

// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];
// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true),
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true),
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true),
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true),
  },
];

// Funcion de aleatoriedad

var getRandom = () => Math.round(Math.random());

var getRandomGenerator = (team) => {
  for (var person of team) {
    for (var i = 0; i < person.availability.length; i++) {
      person.availability[i] = getRandom();
    }
  }
};

getRandomGenerator(myTeam);

// Muestra la agenda/horarios por consola

var showTime = (team) => {
  for (var person of team) {
    console.log("Disponibilidad de " + person.name);
    for (var i = 0; i < person.availability.length; i++) {
        console.log(WORK_HOURS[i] + " " + (person.availability[i] ? "si" : "No"));
    }
    console.log("---------------------------");
  }
};

showTime(myTeam);

// Buscar hueco libre
// Para buscar el primer hueco libre habrá que comprobar la primera franja horaria en la que todos
// los miembros del equipo están disponibles 

var freeTime = (team) => {
    for (var i = 0; i < WORK_HOURS.length; i++) {
        var availability = true;
        for (var person of team) {
            if (!person.availability[i]){
                availability = false;
                break;
            }
        }
        if (availability) return console.log("Hueco encontrado en el horario " + WORK_HOURS[i]); 
    }
    return console.log("Lo siento. No hay hueco disponible en el equipo.")
};

freeTime(myTeam);