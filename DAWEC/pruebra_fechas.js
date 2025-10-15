/*
La cantidad de milisegundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC,
*/ 

let fechaNacimiento = new Date('Octubre 19, 2000');
let fechaNacimiento2 = new Date(2000, 9, 19); 

/*1.-*/
let fechaActual = new Date();

console.log(fechaNacimiento.getDay());
console.log(fechaNacimiento.setFullYear(2025));
console.log(fechaNacimiento);

console.log(fechaNacimiento.setDay(1));

fechaNacimiento.setFullYear(fechaActual.getFullYear()); 
let diaSemana = fechaNacimiento.getDay(); // Obtiene el día de la semana (0-6, donde 0 es domingo)
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let nombreDiaSemana = diasSemana[diaSemana];


/*2.-*/ 
/*
let fechaNacimiento = new Date('Octubre 19, 2000');
let fechaNacimiento2 = new Date(2000, 9, 19); */