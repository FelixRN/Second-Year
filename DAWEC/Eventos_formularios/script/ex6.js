document.addEventListener('DOMContentLoaded', function() {
    let primerH2 = document.querySelector('h2');
    let todosParrafos = document.querySelectorAll('p');
    let segundoParrafo = todosParrafos[1]; // índice 1 es el segundo
    let quintoParrafo = todosParrafos[4]; // índice 4 es el quinto

    primerH2.addEventListener('click', function() {
    
    if (segundoParrafo.style.display === 'none') {
        segundoParrafo.style.display = '';
        quintoParrafo.style.display = '';
    } else {
        segundoParrafo.style.display = 'none';
        quintoParrafo.style.display = 'none';
    }
    
    // Aumentar size de inputs de tipo texto en 5
    let inputsTexto = document.querySelectorAll('input[type="text"]');
    inputsTexto.forEach(input => {
        let sizeActual = parseInt(input.getAttribute('size')) || 0;
        input.setAttribute('size', sizeActual + 5);
    });
});

// Mejor buscar todos los labels y encontrar el que contiene "Escoge el sexo"
let labels = document.querySelectorAll('label');
let labelEscoger;
labels.forEach(label => {
    if (label.textContent.includes('Escoge el sexo')) {
        labelEscoger = label;
    }
});

if (labelEscoger) {
    labelEscoger.addEventListener('mouseover', function() {
        let radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.removeAttribute('name');
            // Al quitar 'name', los radio buttons ya NO son mutuamente excluyentes
            // Ahora se pueden seleccionar ambos a la vez
        });
    });
}

// ➢ Al pasar ratón por título formulario: añadir nuevo atributo name diferente
let tituloFormulario = document.querySelector('#seccionFormulario h2');

    tituloFormulario.addEventListener('mouseover', function() {
        let radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.setAttribute('name', 'genero'); // Nombre diferente a 'sexo'
            // Ahora vuelven a ser mutuamente excluyentes
        });
    });
});