//objeto hotel
// let hotel = {
//     name: "Fuerte",
//     location: "Estepona",
//     image: "https://foto.hrsstatic.com/fotos/0/3/1090/700/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F4%2F4%2F6%2F8%2F%2Fteaser_446833.jpg/RiQ4C8Fdbx7938sO0laXCA%3D%3D/2048,1536/6/Fuerte_Estepona-Estepona-Ausblick-446833.jpg",
// };

// document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
// document.getElementById("location-hotel").innerHTML = hotel.location;
// document.getElementById("image-hotel").src = hotel.image;

//crear dos hoteles y permitir al usuario elegir la reseña sobre uno de ellos.
let hoteles = {
    fuerte: {
        name: "Fuerte",
        location: "Estepona",
        image: "https://foto.hrsstatic.com/fotos/0/3/1090/700/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F4%2F4%2F6%2F8%2F%2Fteaser_446833.jpg/RiQ4C8Fdbx7938sO0laXCA%3D%3D/2048,1536/6/Fuerte_Estepona-Estepona-Ausblick-446833.jpg",
    },
    balmoral: {
        name: "balmoral",
        location: "Benalmádena",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8e/ea/7a/new-balmoral-hotel.jpg?w=900&h=-1&s=1",
    },
  };
let hotel_selected = prompt("Sobre que hotel quiere hacer la reseña: fuerte o balmoral ");

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[hotel_selected].name;
document.getElementById("location-hotel").innerHTML = hoteles[hotel_selected].location;
document.getElementById("image-hotel").src = hoteles[hotel_selected].image;

//que la puntuacion dada por le usuario sea mostrado con estrellas
let stars = {
    una: {
        estrella: "&#9733;&#9734;&#9734;&#9734;&#9734;",
    },
    dos: {
        estrella: "&#9733;&#9733;&#9734;&#9734;&#9734;"
    },
    tres: {
        estrella: "&#9733;&#9733;&#9733;&#9734;&#9734;",
    },
    cuatro: {
        estrella: "&#9733;&#9733;&#9733;&#9733;&#9734;"
    },
    cinco: {
        estrella: "&#9733;&#9733;&#9733;&#9733;&#9733;"
    },
};

//puntuacion estrellas
let puntuacion_selected = prompt("Que puntuacion le das: una, dos, tres, cuatro o cinco");

document.getElementById("puntuacion").innerHTML = stars[puntuacion_selected].estrella;

//puntuacion
// let puntuacion = prompt("Que puntuacion le das al hotel del 1 al 5");
// document.getElementById("puntuacion").innerHTML = puntuacion;

//anonimo si o no
let anonimo = confirm("Quieres que tu reseña sea anónima?")
document.getElementById("anonimo").checked = anonimo;