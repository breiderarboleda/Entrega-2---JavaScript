let nombre = "Breider";
let lastname = "Arboleda";
let age = "20";
let id = "1000898540";
let email = "breider@gmail.com";


const titulo = () => {

    return "Nombre:";
}

const titulo2 = () => {

    return "Correo:";
}

const titulo3 = () => {

    return "Edad:";
}

const titulo4 = () => {

    return "ID:";
}

const perfil = nameUser => {
    //Concatena
    return "Sr" +nameUser;
}

const nombre1 = (nombre2, apellido1) => {

    return nombre2+apellido1;
}

const correo = email1 => {

    return email1;
}

const edad = edad1 => {

    return edad1;
}

const ID = email1 => {

    return email1;
}
let saludo = perfil;

console.log(saludo(" Programador"));

console.log(titulo());
console.log(nombre1(nombre,lastname));
console.log(titulo2());
console.log(correo(email));
console.log(titulo3());
console.log(edad(age));
console.log(titulo4());
console.log(ID(id));

