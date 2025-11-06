let ap = document.getElementById('apellido1');
console.log(ap);

let allP = document. getElementsByTagName('p');
console.log(allP);

let allPDiv = document.querySelectorAll('#seccionTercera p');
console.log(allPDiv);

let inp = document.querySelectorAll('input');
console.log(inp);

let sex = document.querySelectorAll('input[name=sexo]');
console.log(sex);

let listP = document.querySelectorAll('.par');
console.log(listP);

//
//1.-

let divSP1 = document.getElementById('seccionPrimera');
let primerP = divSP1.firstElementChild;
console.log(primerP);

let divSP2 = document.getElementById('seccionPrimera').firstElementChild;
console.log(divSP2);

//2.-
let tercerP = divSP1.lastElementChild;
console.log(tercerP);

//3.-
let lista = document.querySelectorAll('#seccionLista ul')//.firstElementChild;
let lastLista = lista.lastElementChild;
console.log(lastLista);

//4.-

let labelN = document.querySelectorAll('label[input="nombre"]');
console.log(labelN);

