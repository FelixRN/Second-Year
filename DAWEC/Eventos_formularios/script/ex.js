.parrafosNormal {
    background-color: #e3f2fd;
    font-family: 'Georgia', serif;
}

.parrafosEspecial {
    background-color: #fff3e0;
    font-weight: bold;
}

// ➢ Asignar clase parrafosNormal a todos los párrafos
let todosLosParrafos = document.querySelectorAll('p');
todosLosParrafos.forEach(parrafo => {
    parrafo.classList.add('parrafosNormal');
});

// ➢ Al hacer doble click en primer párrafo
let primerParrafo = document.querySelector('p');

primerParrafo.addEventListener('dblclick', function() {
    // Cambiar estilo a párrafos en posiciones múltiplo de 3
    todosLosParrafos.forEach((parrafo, index) => {
        // index empieza en 0, pero posición física es index+1
        let posicion = index + 1;
        if (posicion % 3 === 0) {
            // Eliminar clase anterior y añadir parrafosEspecial
            parrafo.className = ''; // Elimina todas las clases
            parrafo.classList.add('parrafosEspecial');
        }
    });
    
    // Cambiar color de fondo de elementos li con clase "par"
    let elementosPar = document.querySelectorAll('li.par');
    elementosPar.forEach(li => {
        li.style.backgroundColor = '#ffccbc'; // Cambia al color que quieras
    });
});