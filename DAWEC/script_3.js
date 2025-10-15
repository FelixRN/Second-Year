let notas = [7.5, 8.0, 6.5, 9.0, 5.5, 4.0, 8.5, 7.0, 6.0, 9.5, 5.0, 4.5, 8.0, 7.5, 6.5];

let aprovados = notas.filter(function(nota) {
   if(nota >= 5) {
      return true
      } else {
         return false
         };
});
console.log(aprovados);

let busqueda = notas.findIndex(function(nota) {
   return notas = 5.5;
});
console.log(busqueda); 

let todosAprovados = notas.every(function(nota) {
   return nota >= 5;
});
console.log(todosAprovados);

//

let palabras = ["manzana", "banana", "cereza", "durazno", "uva", "kiwi", "mango", "piña", "fresa", "naranja", 
"limón", "coco"];

let corto = palabras.filter(function(palabra) {
   return palabra.length <= 6;
});
console.log(corto);

 let ultimaLetra = palabras.find(function(palabra) {
   return palabra.endsWith("o");
});
console.log(ultimaLetra);

let numTelefonos = ["123-456-7890", "987-654-3210", "555-555-5555", "111-222-3333", "444-444-4444", "666-777-8888", "999-000-1113", "222-333-4444"];
let ultimoNumero = numTelefonos.some(function(numero) {
   return numero.endsWith("3");
});
console.log(ultimoNumero);