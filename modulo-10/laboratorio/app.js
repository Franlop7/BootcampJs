// Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si
// dicho objeto tiene una propiedad llamada id (debe devolver booleano true / false ).
// TIP: No accedas a 'id' con punto (.) o con corchetes ([]).

const objeto = {
  id: "7",
  name: "fran",
  surname: "loepz",
  age: 35,
};

const hasId = ({ id }) => (id ? true : false);
console.log(hasId(objeto));

console.log("--------------");

// Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer
// elemento.
//TIP: No utilices el corchete ([]) para acceder a la posición 0.

const names = ["fran", "noelia", "javi", "raquel", "ana", "antonio"];

const head = ([first]) => first;
console.log(head(names));

console.log("--------------");

// Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo
// array con todos los elementos menos el primero.
// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

const tail = ([, ...rest]) => rest;
console.log(tail(names));

console.log("--------------");

// Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva
// un nuevo array donde el primer elemento ha sido colocado en la última posición.
// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

const swapFirstToLast = ([first, ...rest]) => {
  rest.push(first);
  return rest;
};
console.log(swapFirstToLast(names));

console.log("--------------");

// Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho
// objeto clonado excepto la propiedad id si la hubiera.
// TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest.

const excludeId = ({ id, ...rest }) => rest;
console.log(excludeId(objeto));

console.log("--------------");

// Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como
// entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.
// TIP: No utilices bucles.

// const wordsStartingWithA = (array) =>
// array.filter((element) => element.startsWith("a"));

const wordsStartingWithA = (array) => array.filter((words) => words[0] === "a");
console.log(wordsStartingWithA(names));

console.log("--------------");

// Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y
// devuelva otro string con la concatenación de todos, separados por | .
// TIP: No utilices bucles.

const concat = (concatenar) => concatenar.join("|");
console.log(concat(names));

console.log("--------------");

// Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro
// que sea un número ( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
// TIP: No utilices bucles.

const arrayNumber = [1, 2, 3, 4, 5];

const multArray = (array, number) => array.map((arr) => arr * number);
console.log(multArray(arrayNumber, 7));

console.log("--------------");

// Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva
// como resultado el producto de todos ellos.
// TIP: No utilices bucles.

//No estoy seguro si es, lo que pide el ejercicio. No lo entiendo bien

const calcMult = (array) => array.reduce((acc, element) => acc * element);
console.log(calcMult(arrayNumber));

console.log("--------------");

// EJERCICIOS EXTRAS

// Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde
// el primer elemento ha sido intercambiado por el segundo.
// TIP: No modifiques el array de entrada original

const swapFirstSecond = ([first, second, ...rest]) => {
  const [...result] = rest;
  result.unshift(second, first);
  return result;
};

console.log(swapFirstSecond(names));

console.log("--------------");

// Implementa una función longest tal que admita multiples strings como argumento de entrada así
// como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan
// por dicho carácter o no.
// TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).

const fruit = ["platano", "platano", "platano"];

const longest = (x, ...array) =>
  array.every((element) => element.startsWith(x));
console.log(longest("p", ...fruit));

console.log("--------------");

// Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también
// un carácter, devuelva cuantas veces aparece dicho carácter en el string.
// TIP: No utilices bucles.
// TIP: Convierte el string a un array mediante Array.from() .

const searchInStringV1 = (character, string) =>
  Array.from(string).reduce(
    (sumWords, word) => sumWords + (word === character ? 1 : 0),
    0
  );
console.log(searchInStringV1("o", "esternocleidomastoideo"));

console.log("--------------");

// Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 , encontrando
// otra alternativa sin usar reduce .
// TIP: No utilices bucles.
// TIP: Convierte el string a un array mediante Array.from() .

const searchInStringV2 = (character, string) =>
  Array.from(string).filter((word) => word === character).length;

console.log(searchInStringV2("e", "esternocleidomastoideo"));

console.log("--------------");

// Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus
// letras ordenadas alfabéticamente.
// TIP: No utilices bucles. No modifiques el string original de entrada.
// TIP: Convierte el string a un array mediante Array.from() .

const sorCharacters = (string) => Array.from(string).sort();

console.log(sorCharacters("francisco"));

console.log("--------------");

// Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva
// todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
// TIP: No utilices bucles.

const shout = (...palabras) => palabras.join("! ").toUpperCase() + "!";
console.log(shout("fran", "noelia", "bichin"));

console.log("--------------");

// Lista de la compra

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

const shoppingCartIva = (array) => {
  array.map((element) => (element.iva = element.price * element.units * 0.21));
  return array;
};
console.log(shoppingCartIva(shoppingCart));

// B. Ordena la lista de más a menos unidades.

const orderShoppingCart = (array) => array.sort((a, b) => a.units - b.units);
console.log(orderShoppingCart(shoppingCart));

// C. Obtén el subtotal gastado en droguería.

const subTotalDrogueria = (array) =>
  array.reduce((result, element) => {
    if (element.category === "Droguería")
      result += element.price * element.units;
    return result;
  }, 0);

console.log(subTotalDrogueria(shoppingCart));

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
// TIP: No utilices bucles.

const showListShoppingCart = (array) => {
  array.sort((a, b) => {
    if (b.category < a.category) {
      return -1;
    } else if (b.category > a.category) {
      return 1;
    } else {
      return 0;
    }
  });

  array.map((element) =>
    console.log(element.product + " -> " + element.price * element.units + "€")
  );
};

console.log(showListShoppingCart(shoppingCart));
