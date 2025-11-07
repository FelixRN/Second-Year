//Ejercicio 1
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

//Ejercicio 2
//1.-

let divSP1 = document.getElementById('seccionPrimera');
let primerP = divSP1.firstElementChild;
console.log(primerP);

let primerP2 = document.querySelector('#seccionPrimera p');
console.log(primerP2);

//2.-
let tercerP = divSP1.children[2];
console.log(tercerP);

let tercerP2 = document.querySelectorAll('#seccionPrimera p')[2];
console.log(tercerP2);

//3.-
let lista = document.querySelectorAll('#seccionLista ul')//.firstElementChild;
let lastLista = lista.lastElementChild;
console.log(lastLista);

let lastLista2 = document.querySelectorAll('#seccionLista ul li');
lastLista2 = lastLista2[lastLista2.length - 1];
console.log(lastLista2);


//4.-

let labelN = document.querySelectorAll('label[input="nombre"]');
console.log(labelN);

let inputNombre = document.getElementById('nombre');
let labelN2 = inputNombre.previousElementSibling;
console.log(labelN2);


//Ejercicio 3:
// ➢ Recupera el innerHTML del elemento ul y su textContent
let ul = document.querySelector('#seccionLista ul');
console.log('innerHTML:', ul.innerHTML);
console.log('textContent:', ul.textContent);

// ➢ Compara los resultados
// innerHTML: Devuelve TODO incluyendo las etiquetas <li> y sus atributos (class="par", class="impar")
// textContent: Devuelve SOLO el texto, sin etiquetas HTML, pero con espacios y saltos de línea

// ➢ Recupera el valor del primer input radio de sexo
let primerRadio = document.querySelector('input[name="sexo"]');
console.log('Valor primer radio:', primerRadio.value); // Devuelve "H"

// ➢ Busca como recuperar el valor del sexo que está seleccionado
// Opción 1: Con querySelector y :checked
let sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
if (sexoSeleccionado) {
    console.log('Sexo seleccionado:', sexoSeleccionado.value);
} else {
    console.log('No hay ningún sexo seleccionado');
}

// Opción 2: Recorriendo todos los radios
let radios = document.querySelectorAll('input[name="sexo"]');
radios.forEach(radio => {
    if (radio.checked) {
        console.log('Sexo seleccionado (forEach):', radio.value);
    }
});


// ➢ Al pulsar Aceptar, dar foco a la caja del nombre
let botonAceptar = document.getElementById('boton1');
let inputNombre2 = document.getElementById('nombre');

botonAceptar.addEventListener('click', function() {
    inputNombre2.focus();
    console.log('Foco puesto en el campo nombre');
});

// ➢ Al pulsar Cancelar, quitar el foco de la caja del nombre
let botonCancelar = document.getElementById('boton2');

botonCancelar.addEventListener('click', function() {
    inputNombre2.blur();
    console.log('Foco quitado del campo nombre');
});

//Ejercicio 4:
// ➢ Crear h2 y añadirlo como primer hijo de seccionTercera al pulsar primer párrafo
let secTercera = document.getElementById('seccionTercera');
let priPafoTercera = secTercera.querySelector('p');

priPafoTercera.addEventListener('click', function() {
    // Crear elemento h2
    let nuevoH2 = document.createElement('h2');
    // Crear nodo de texto
    let textoH2 = document.createTextNode('Lorem Ipsum de nuevo');
    // Añadir texto al h2
    nuevoH2.appendChild(textoH2);
    // Insertar como primer hijo
    seccionTercera.insertBefore(nuevoH2, secTercera.firstElementChild);
});

// ➢ Mover tercer párrafo de seccionPrimera a primera posición de seccionTercera
let seccPrimera = document.getElementById('seccionPrimera');
let terParrafo = seccPrimera.children[2];

terParrafo.addEventListener('click', function() {
    // Mover el párrafo (no se clona, se mueve)
    seccionTercera.insertBefore(terParrafo, seccionTercera.firstElementChild);
});

// ➢ Clonar div de lista y añadirlo a un nuevo div tras seccionSegunda
let encabeLista = document.querySelector('#seccionLista h2');

encabeLista.addEventListener('click', function() {
    // Crear nuevo div
    let nuevoDiv = document.createElement('div');
    nuevoDiv.id = 'seccionClonada';
    
    // Clonar div con lista (con todos sus descendientes)
    let divLista = document.getElementById('seccionLista');
    let divClonado = divLista.cloneNode(true);
    
    // Añadir div clonado como hijo del nuevo div
    nuevoDiv.appendChild(divClonado);
    
    // Insertar nuevo div después de seccionSegunda
    let seccionSegunda = document.getElementById('seccionSegunda');
    seccionSegunda.parentNode.insertBefore(nuevoDiv, seccionSegunda.nextSibling);
});

// ➢ Eliminar última fila de la lista clonada al pasar ratón por h1
let h1_new = document.querySelector('h1');

h1_new.addEventListener('mouseover', function() {
    // Buscar la lista clonada (si existe)
    let seccionClonada = document.getElementById('seccionClonada');
    if (seccionClonada) {
        let listaClonada = seccionClonada.querySelector('ul');
        if (listaClonada && listaClonada.children.length > 0) {
            // Eliminar último li
            listaClonada.removeChild(listaClonada.lastElementChild);
        }
    }
});

//Ejercicio 5:

// ➢ Mismo ejercicio 4 pero con ChildNode

// 1. Crear h2 y añadirlo como primer hijo de seccionTercera
let seccionTercera = document.getElementById('seccionTercera');
let primerParrafoTercera = seccionTercera.querySelector('p');

primerParrafoTercera.addEventListener('click', function() {
    let nuevoH2 = document.createElement('h2');
    nuevoH2.textContent = 'Lorem Ipsum de nuevo';
    // Usar before() en lugar de insertBefore()
    seccionTercera.firstElementChild.before(nuevoH2);
});

// 2. Mover tercer párrafo de seccionPrimera a primera posición de seccionTercera
let seccionPrimera = document.getElementById('seccionPrimera');
let tercerParrafo = seccionPrimera.children[2];

tercerParrafo.addEventListener('click', function() {
    // Usar before() - más simple que insertBefore()
    seccionTercera.firstElementChild.before(tercerParrafo);
});

// 3. Clonar div de lista y añadirlo a un nuevo div tras seccionSegunda
let encabezadoLista = document.querySelector('#seccionLista h2');

encabezadoLista.addEventListener('click', function() {
    let nuevoDiv = document.createElement('div');
    nuevoDiv.id = 'seccionClonada';
    
    let divLista = document.getElementById('seccionLista');
    let divClonado = divLista.cloneNode(true);
    
    nuevoDiv.appendChild(divClonado);
    
    // Usar after() en lugar de insertBefore con nextSibling
    let seccionSegunda = document.getElementById('seccionSegunda');
    seccionSegunda.after(nuevoDiv);
});

// 4. Eliminar última fila de la lista clonada
let h1 = document.querySelector('h1');

h1.addEventListener('mouseover', function() {
    let seccionClonada = document.getElementById('seccionClonada');
    if (seccionClonada) {
        let listaClonada = seccionClonada.querySelector('ul');
        if (listaClonada && listaClonada.children.length > 0) {
            // Usar remove() en lugar de removeChild()
            listaClonada.lastElementChild.remove();
        }
    }
});

// COMPARACIÓN:
// - before() es más simple que insertBefore()
// - after() es más simple que insertBefore con nextSibling
// - remove() es más simple que parentNode.removeChild()
// - El resultado es el MISMO, solo cambia la sintaxis (más moderna y legible)

//EJERCICIO 6 
// ➢ Al pulsar primer h2: mostrar/ocultar párrafos 2º y 5º, aumentar size de inputs
let primerH2 = document.querySelector('h2');
let todosParrafos = document.querySelectorAll('p');
let segundoParrafo = todosParrafos[1]; // índice 1 es el segundo
let quintoParrafo = todosParrafos[4]; // índice 4 es el quinto

primerH2.addEventListener('click', function() {
    // Mostrar/ocultar párrafos
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

// ➢ Al pasar ratón por "Escoge el sexo": quitar atributo name a radio buttons
let labelSexo = document.querySelector('label'); // O buscar el texto específico
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

//EJERCICIO 7
//Añadimos un trabajarConDom.css
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

//Resumen de diferencias clave:
/*
Ejercicio 4 vs 5:

insertBefore() → before()
parentNode.insertBefore(nuevo, siguiente) → after(nuevo)
removeChild() → remove()
Resultado idéntico, sintaxis más moderna y legible

Ejercicio 6:

style.display para mostrar/ocultar
getAttribute()/setAttribute() para manipular atributos
removeAttribute() para eliminar atributos
Los radio buttons sin name pierden la exclusividad mutua

Ejercicio 7:

classList.add() para añadir clases
className = '' para eliminar todas las clases
style.backgroundColor para cambiar estilos directamente
Múltiplo de 3: usar (index + 1) % 3 === 0*/

//EJERCICIO 8

// ➢ Página con botón y timers

// Variable global para controlar el intervalo
let idIntervalo = null;
let segundosTranscurridos = 0;

// Función que muestra mensaje de bienvenida
function mostrarBienvenida() {
    alert('¡Bienvenido a la página!');
}

// Ejecutar bienvenida a los 5 segundos
setTimeout(mostrarBienvenida, 5000);

// Ejecutar bienvenida a los 7 segundos
setTimeout(mostrarBienvenida, 7000);

// Función para el botón con html: 
/*<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 8 - Timers</title>
</head>
<body>
    <h1>Ejercicio de Timers</h1>
    <button id="botonTimer">Iniciar contador</button>
    
    <script src="ejercicio8.js"></script>
</body>
</html> */

let boton = document.getElementById('botonTimer'); // Asume que tienes un botón con este id

boton.addEventListener('click', function() {
    // Si no hay intervalo activo, iniciarlo
    if (idIntervalo === null) {
        segundosTranscurridos = 0;
        idIntervalo = setInterval(() => {
            segundosTranscurridos += 3;
            console.log('Han pasado ' + segundosTranscurridos + ' segundos');
        }, 3000);
        boton.textContent = 'Detener contador';
    } 
    // Si hay intervalo activo, detenerlo
    else {
        clearInterval(idIntervalo);
        idIntervalo = null;
        segundosTranscurridos = 0;
        console.log('Contador detenido');
        boton.textContent = 'Iniciar contador';
    }
});

//EJERCICIO9(Desde la consola)
// ➢ Abrir ventana de 500x300 en posición 10,20
let ventana = window.open('', 'ventanaEmergente', 'width=500,height=300,left=10,top=20');

// ➢ Escribir en ella
ventana.document.write('<h1>Esto es una ventana emergente</h1>');

// ➢ Moverla 300px a la izquierda y 100 hacia abajo
ventana.moveBy(300, 100);

// ➢ Cerrarla (ejecutar esto después de ver el resultado)
ventana.close();

// ========== EJERCICIO 8 ==========

// Variable global para controlar el intervalo
let idIntervalo = null;
let segundosTranscurridos = 0;

// Función que muestra mensaje de bienvenida
function mostrarBienvenida() {
    alert('¡Bienvenido a la página!');
}

// Ejecutar bienvenida a los 5 segundos
setTimeout(mostrarBienvenida, 5000);

// Ejecutar bienvenida a los 7 segundos
setTimeout(mostrarBienvenida, 7000);

// Función para el botón del timer
let botonTimer = document.getElementById('botonTimer');

botonTimer.addEventListener('click', function() {
    if (idIntervalo === null) {
        segundosTranscurridos = 0;
        idIntervalo = setInterval(() => {
            segundosTranscurridos += 3;
            console.log('Han pasado ' + segundosTranscurridos + ' segundos');
        }, 3000);
        botonTimer.textContent = 'Detener contador';
    } else {
        clearInterval(idIntervalo);
        idIntervalo = null;
        segundosTranscurridos = 0;
        console.log('Contador detenido');
        botonTimer.textContent = 'Iniciar contador';
    }
});

// ========== EJERCICIO 9 ==========

let botonVentana = document.getElementById('botonVentana');
let ventanaEmergente = null;

botonVentana.addEventListener('click', function() {
    // Calcular tamaño justo para el botón (aproximado)
    let anchoVentana = 200;
    let altoVentana = 100;
    
    // Abrir ventana emergente sin barras
    ventanaEmergente = window.open(
        '', 
        'miVentana', 
        'width=' + anchoVentana + 
        ',height=' + altoVentana + 
        ',toolbar=no' +
        ',location=no' +
        ',directories=no' +
        ',status=no' +
        ',menubar=no' +
        ',scrollbars=no' +
        ',resizable=no'
    );
    
    // Escribir contenido en la ventana emergente
    ventanaEmergente.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Ventana Emergente</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: Arial, sans-serif;
                }
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                }
            </style>
        </head>
        <body>
            <button onclick="window.close()">Cerrar ventana</button>
        </body>
        </html>
    `);
    
    // Cerrar el document.write para que se renderice correctamente
    ventanaEmergente.document.close();
});

// TIMERS - Ejemplos para probar en consola

// 1. Timeout simple
let id1 = setTimeout(() => {
    console.log('Este mensaje aparece después de 2 segundos');
}, 2000);

// 2. Timeout con parámetros
let id2 = setTimeout((nombre, edad) => {
    console.log(`Hola ${nombre}, tienes ${edad} años`);
}, 3000, 'Juan', 25);

// 3. Cancelar un timeout antes de que se ejecute
let id3 = setTimeout(() => {
    console.log('Esto NO se ejecutará');
}, 5000);
clearTimeout(id3); // Cancelar inmediatamente

// 4. Interval que se ejecuta 5 veces
let contador = 0;
let id4 = setInterval(() => {
    contador++;
    console.log('Ejecución número: ' + contador);
    if (contador === 5) {
        clearInterval(id4);
        console.log('Interval finalizado');
    }
}, 1000);

// WINDOW - Ejemplos para probar en consola

// 1. Ver propiedades de la ventana
console.log('Nombre ventana:', window.name);
console.log('Posición X:', window.screenX);
console.log('Posición Y:', window.screenY);
console.log('Ancho total:', window.outerWidth);
console.log('Alto total:', window.outerHeight);
console.log('Ancho interno:', window.innerWidth);
console.log('Alto interno:', window.innerHeight);

// 2. Abrir ventana con opciones específicas
let nuevaVentana = window.open(
    'https://www.google.com',
    'ventanaGoogle',
    'width=800,height=600,left=100,top=100,toolbar=yes,menubar=yes'
);

// 3. Mover y redimensionar ventana (solo funciona con ventanas abiertas con open)
// nuevaVentana.moveTo(200, 200);
// nuevaVentana.resizeTo(1000, 700);

// 4. Scroll de la ventana
console.log('Scroll horizontal:', window.scrollX);
console.log('Scroll vertical:', window.scrollY);

//EJERCICIO 10
// ➢ Mostrar la ruta completa de la página actual
console.log('URL completa:', window.location.href);
// o simplemente:
console.log('URL completa:', location.href);

// ➢ Mostrar el host de la página
console.log('Host:', window.location.host);
// o:
console.log('Host:', location.host);

// ➢ Cargar la página de Google
window.location.assign('https://www.google.com');
// o también puedes usar:
// window.location.href = 'https://www.google.com';

// ➢ Volver a la página anterior
window.history.back();
// o:
history.back();

// ➢ Obtener propiedades de screen y compararlas con window
console.log('=== PROPIEDADES SCREEN ===');
console.log('screen.width:', screen.width);
console.log('screen.height:', screen.height);
console.log('screen.availWidth:', screen.availWidth);
console.log('screen.availHeight:', screen.availHeight);

console.log('\n=== PROPIEDADES WINDOW ===');
console.log('window.innerWidth:', window.innerWidth);
console.log('window.innerHeight:', window.innerHeight);
console.log('window.outerWidth:', window.outerWidth);
console.log('window.outerHeight:', window.outerHeight);

console.log('\n=== COMPARACIÓN ===');
console.log('screen.width es la resolución total de la pantalla');
console.log('screen.availWidth es la resolución sin la barra del SO');
console.log('window.outerWidth es el ancho de la ventana del navegador');
console.log('window.innerWidth es el ancho del área visible (sin barras)');

//Ejemplos:
//Ejemplo 1: Uso básico de localStorage
javascript// Verificar si el navegador soporta Storage
if (typeof(Storage) !== "undefined") {
    console.log("El navegador soporta Web Storage");
    
    // ➢ GUARDAR datos
    localStorage.setItem('nombre', 'Juan Pérez');
    localStorage.setItem('edad', '25');
    localStorage.setItem('ciudad', 'Madrid');
    
    // ➢ LEER datos
    console.log('Nombre:', localStorage.getItem('nombre'));
    console.log('Edad:', localStorage.getItem('edad'));
    console.log('Ciudad:', localStorage.getItem('ciudad'));
    
    // ➢ Ver cantidad de elementos
    console.log('Elementos almacenados:', localStorage.length);
    
    // ➢ ELIMINAR un elemento
    localStorage.removeItem('edad');
    console.log('Después de eliminar edad:', localStorage.getItem('edad')); // null
    
    // ➢ LIMPIAR todo
    // localStorage.clear();
    
} else {
    console.log("El navegador NO soporta Web Storage");
}

//Ejemplo 2: Guardar objetos en localStorage
// localStorage solo guarda strings, así que hay que convertir objetos

// ➢ Guardar un objeto
let usuario = {
    nombre: 'María García',
    edad: 30,
    email: 'maria@example.com',
    intereses: ['programación', 'música', 'viajes']
};

// Convertir objeto a JSON string
localStorage.setItem('usuario', JSON.stringify(usuario));

// ➢ Recuperar el objeto
let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
console.log('Usuario recuperado:', usuarioRecuperado);
console.log('Nombre:', usuarioRecuperado.nombre);
console.log('Intereses:', usuarioRecuperado.intereses);

//Ejemplo 3: sessionStorage
 //sessionStorage funciona igual que localStorage
// pero los datos se borran al cerrar la pestaña

if (typeof(Storage) !== "undefined") {
    // ➢ Guardar en sessionStorage
    sessionStorage.setItem('tokenSesion', 'abc123xyz789');
    sessionStorage.setItem('tiempoInicio', Date.now().toString());
    
    // ➢ Leer de sessionStorage
    console.log('Token:', sessionStorage.getItem('tokenSesion'));
    console.log('Tiempo inicio:', sessionStorage.getItem('tiempoInicio'));
    
    // ➢ Los datos persisten mientras la pestaña esté abierta
    // Al cerrar la pestaña, se pierden
}

//Ejemplo 4: Evento storage (sincronización entre pestañas)
// Este evento se dispara cuando localStorage cambia en OTRA pestaña

window.addEventListener('storage', function(e) {
    console.log('¡Storage ha cambiado en otra pestaña!');
    console.log('Clave modificada:', e.key);
    console.log('Valor antiguo:', e.oldValue);
    console.log('Valor nuevo:', e.newValue);
    console.log('URL donde se modificó:', e.url);
});

// Para probarlo:
// 1. Abre esta página en dos pestañas
// 2. En la pestaña 1, ejecuta: localStorage.setItem('prueba', 'valor1');
// 3. En la pestaña 2 verás el evento dispararse

//Ejercicio completo:
/*
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio localStorage - Preferencias</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            transition: all 0.3s;
        }
        .tema-oscuro {
            background-color: #222;
            color: #fff;
        }
        .tema-claro {
            background-color: #fff;
            color: #000;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        input, button, select {
            margin: 10px 5px;
            padding: 8px;
        }
        button {
            cursor: pointer;
        }
        .info {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    </style>
</head>
<body class="tema-claro">
    <div class="container">
        <h1>Sistema de Preferencias con localStorage</h1>
        
        <div>
            <h2>Configuración</h2>
            <label>Nombre de usuario:</label>
            <input type="text" id="nombreUsuario" placeholder="Tu nombre">
            
            <label>Tema:</label>
            <select id="tema">
                <option value="claro">Claro</option>
                <option value="oscuro">Oscuro</option>
            </select>
            
            <label>Tamaño de fuente:</label>
            <select id="tamanoFuente">
                <option value="14">Pequeño (14px)</option>
                <option value="16">Medio (16px)</option>
                <option value="18">Grande (18px)</option>
            </select>
            
            <br>
            <button id="guardarPreferencias">Guardar Preferencias</button>
            <button id="borrarPreferencias">Borrar Preferencias</button>
        </div>
        
        <div class="info">
            <h2>Información de Storage</h2>
            <p id="infoStorage"></p>
            <button id="mostrarTodo">Mostrar todo localStorage</button>
        </div>
        
        <div class="info">
            <h2>Información del navegador</h2>
            <p id="infoNavegador"></p>
        </div>
    </div>

    <script src="ejercicioStorage.js"></script>
</body>
</html>
*/

//CSS:
/*
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio localStorage - Preferencias</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            transition: all 0.3s;
        }
        .tema-oscuro {
            background-color: #222;
            color: #fff;
        }
        .tema-claro {
            background-color: #fff;
            color: #000;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        input, button, select {
            margin: 10px 5px;
            padding: 8px;
        }
        button {
            cursor: pointer;
        }
        .info {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    </style>
</head>
<body class="tema-claro">
    <div class="container">
        <h1>Sistema de Preferencias con localStorage</h1>
        
        <div>
            <h2>Configuración</h2>
            <label>Nombre de usuario:</label>
            <input type="text" id="nombreUsuario" placeholder="Tu nombre">
            
            <label>Tema:</label>
            <select id="tema">
                <option value="claro">Claro</option>
                <option value="oscuro">Oscuro</option>
            </select>
            
            <label>Tamaño de fuente:</label>
            <select id="tamanoFuente">
                <option value="14">Pequeño (14px)</option>
                <option value="16">Medio (16px)</option>
                <option value="18">Grande (18px)</option>
            </select>
            
            <br>
            <button id="guardarPreferencias">Guardar Preferencias</button>
            <button id="borrarPreferencias">Borrar Preferencias</button>
        </div>
        
        <div class="info">
            <h2>Información de Storage</h2>
            <p id="infoStorage"></p>
            <button id="mostrarTodo">Mostrar todo localStorage</button>
        </div>
        
        <div class="info">
            <h2>Información del navegador</h2>
            <p id="infoNavegador"></p>
        </div>
    </div>

    <script src="ejercicioStorage.js"></script>
</body>
</html>*/

//JS:
// ejercicioStorage.js

// Verificar soporte de Storage
if (typeof(Storage) === "undefined") {
    alert("Tu navegador no soporta Web Storage API");
}

// Referencias a elementos
const nombreUsuario = document.getElementById('nombreUsuario');
const tema = document.getElementById('tema');
const tamanoFuente = document.getElementById('tamanoFuente');
const btnGuardar = document.getElementById('guardarPreferencias');
const btnBorrar = document.getElementById('borrarPreferencias');
const btnMostrar = document.getElementById('mostrarTodo');
const infoStorage = document.getElementById('infoStorage');
const infoNavegador = document.getElementById('infoNavegador');

// Cargar preferencias al iniciar
window.addEventListener('load', cargarPreferencias);

// Guardar preferencias
btnGuardar.addEventListener('click', function() {
    const preferencias = {
        nombre: nombreUsuario.value,
        tema: tema.value,
        tamanoFuente: tamanoFuente.value,
        fechaGuardado: new Date().toLocaleString()
    };
    
    // Guardar cada preferencia
    localStorage.setItem('nombreUsuario', preferencias.nombre);
    localStorage.setItem('tema', preferencias.tema);
    localStorage.setItem('tamanoFuente', preferencias.tamanoFuente);
    
    // O guardar todo el objeto
    localStorage.setItem('preferencias', JSON.stringify(preferencias));
    
    aplicarPreferencias();
    actualizarInfoStorage();
    alert('Preferencias guardadas correctamente');
});

// Borrar preferencias
btnBorrar.addEventListener('click', function() {
    if (confirm('¿Estás seguro de borrar todas las preferencias?')) {
        localStorage.clear();
        
        // Restaurar valores por defecto
        nombreUsuario.value = '';
        tema.value = 'claro';
        tamanoFuente.value = '16';
        
        aplicarPreferencias();
        actualizarInfoStorage();
        alert('Preferencias borradas');
    }
});

// Mostrar todo el localStorage
btnMostrar.addEventListener('click', function() {
    console.log('=== CONTENIDO DE localStorage ===');
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        console.log(`${clave}: ${valor}`);
    }
    alert('Revisa la consola para ver todo el contenido');
});

// Cargar preferencias guardadas
function cargarPreferencias() {
    // Opción 1: Cargar desde claves individuales
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    const temaGuardado = localStorage.getItem('tema');
    const tamanoGuardado = localStorage.getItem('tamanoFuente');
    
    if (nombreGuardado) nombreUsuario.value = nombreGuardado;
    if (temaGuardado) tema.value = temaGuardado;
    if (tamanoGuardado) tamanoFuente.value = tamanoGuardado;
    
    // Opción 2: Cargar desde objeto completo
    /*
    const preferencias = JSON.parse(localStorage.getItem('preferencias'));
    if (preferencias) {
        nombreUsuario.value = preferencias.nombre;
        tema.value = preferencias.tema;
        tamanoFuente.value = preferencias.tamanoFuente;
    }
    */
    
    aplicarPreferencias();
    actualizarInfoStorage();
    mostrarInfoNavegador();
}

// Aplicar preferencias visuales
function aplicarPreferencias() {
    // Aplicar tema
    if (tema.value === 'oscuro') {
        document.body.className = 'tema-oscuro';
    } else {
        document.body.className = 'tema-claro';
    }
    
    // Aplicar tamaño de fuente
    document.body.style.fontSize = tamanoFuente.value + 'px';
}

// Actualizar información de storage
function actualizarInfoStorage() {
    let info = `<strong>Elementos en localStorage:</strong> ${localStorage.length}<br>`;
    info += `<strong>Espacio utilizado aproximado:</strong> ${calcularTamanoStorage()} caracteres<br><br>`;
    
    if (localStorage.length > 0) {
        info += '<strong>Contenido:</strong><br>';
        for (let i = 0; i < localStorage.length; i++) {
            let clave = localStorage.key(i);
            let valor = localStorage.getItem(clave);
            info += `• ${clave}: ${valor}<br>`;
        }
    } else {
        info += '<em>No hay datos guardados</em>';
    }
    
    infoStorage.innerHTML = info;
}

// Calcular tamaño aproximado
function calcularTamanoStorage() {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        total += clave.length + valor.length;
    }
    return total;
}

// Mostrar información del navegador
function mostrarInfoNavegador() {
    let info = `
        <strong>User Agent:</strong> ${navigator.userAgent}<br>
        <strong>Plataforma:</strong> ${navigator.platform}<br>
        <strong>Idioma:</strong> ${navigator.language}<br>
        <strong>Online:</strong> ${navigator.onLine ? 'Sí' : 'No'}<br><br>
        
        <strong>Pantalla:</strong><br>
        • Resolución: ${screen.width}x${screen.height}<br>
        • Disponible: ${screen.availWidth}x${screen.availHeight}<br>
        • Profundidad de color: ${screen.colorDepth} bits<br><br>
        
        <strong>Ventana:</strong><br>
        • Outer: ${window.outerWidth}x${window.outerHeight}<br>
        • Inner: ${window.innerWidth}x${window.innerHeight}<br>
        • Posición: (${window.screenX}, ${window.screenY})<br><br>
        
        <strong>Location:</strong><br>
        • URL: ${location.href}<br>
        • Host: ${location.host}<br>
        • Protocol: ${location.protocol}<br>
        • Pathname: ${location.pathname}
    `;
    
    infoNavegador.innerHTML = info;
}

// Escuchar cambios en otros tabs (solo para localStorage)
window.addEventListener('storage', function(e) {
    console.log('Storage modificado en otra pestaña:');
    console.log('Clave:', e.key);
    console.log('Valor anterior:', e.oldValue);
    console.log('Valor nuevo:', e.newValue);
    
    // Recargar preferencias si cambian
    cargarPreferencias();
});

// Aplicar cambios en tiempo real
tema.addEventListener('change', aplicarPreferencias);
tamanoFuente.addEventListener('change', aplicarPreferencias);