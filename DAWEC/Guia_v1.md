# Guía Completa: Sistema de Donaciones Benéficas con JavaScript

## Índice
1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Pautas del Ejercicio](#pautas-del-ejercicio)
3. [Código HTML](#código-html)
4. [Código CSS](#código-css)
5. [Código JavaScript Completo](#código-javascript-completo)
6. [Explicación Detallada](#explicación-detallada)
   - [Parte 1: Estructura de Datos](#parte-1-estructura-de-datos)
   - [Parte 2: Inicialización](#parte-2-inicialización)
   - [Parte 3: Gestión de Clics](#parte-3-gestión-de-clics)
   - [Parte 4: Mostrar Resumen](#parte-4-mostrar-resumen)
   - [Parte 5: Limpiar Trámite](#parte-5-limpiar-trámite)
7. [Métodos de Arrays Utilizados](#métodos-de-arrays-utilizados)

---

## Descripción del Proyecto

Sistema web para realizar aportaciones a organizaciones benéficas. Los usuarios pueden hacer clics en imágenes de organizaciones para donar cantidades fijas, y al finalizar ver un resumen ordenado de sus donaciones.

---

## Pautas del Ejercicio

### Requisitos Principales:

1. **Organizaciones disponibles**: Mínimo 10 organizaciones con logo, nombre y valor fijo de donación.

2. **Sistema de aportaciones**:
   - 2.1. Click en imagen añade una aportación
   - 2.2. Se acumula el dinero total y número de aportaciones

3. **Finalizar trámite**:
   - 3.1. Botón muestra el resumen en una sección
   - 3.2. Organizaciones aparecen una vez con su número de aportaciones
   - 3.3. Orden alfabético inverso (Z-A)
   - 3.4. Cada organización en línea diferente
   - 3.5. Mostrar donación total y media

4. **Formato del resumen**:
```
WWF ---- 1 aportación
Unicef ---- 2 aportaciones
Médicos sin fronteras ---- 2 aportaciones
GreenPeace ---- 1 aportación

Donación final: 22 €
Donación media: 5.50 €/aportación
```

5. **Reset automático**: Tras finalizar, las variables se limpian para empezar de nuevo.

6. **Nuevo ciclo**: Al hacer click en cualquier organización después de mostrar resultados, se limpia el resumen y empieza nuevo ciclo.

---

## Código HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <title>Gestor de donaciones</title>
</head>
<body>
    <h1>Donación</h1>
    <div id="contenedor_principal">
        <div id="plantilla_img">
            <div class="img_1"><p>7€</p>
                <img src="img/1_brac.jpg" alt="">
            </div>
            <div class="img_2"><p>8€</p>
                <img src="img/2_msf.jpg" alt="">
            </div>
            <div class="img_3"><p>3€</p>
                <img src="img/3_care.jpg" alt="">
            </div>
            <div class="img_4"><p>5€</p>
                <img src="img/4_Amnesty.jpeg" alt="">
            </div>
            <div class="img_5"><p>6€</p>
                <img src="img/5_GreenPeace.png" alt="">
            </div>
            <div class="img_6"><p>9€</p>
                <img src="img/6_CRI.jpg" alt="">
            </div>
            <div class="img_7"><p>10€</p>
                <img src="img/7_OXFAM.jpg" alt="">
            </div>
            <div class="img_8"><p>4€</p>
                <img src="img/8_STC.jpg" alt="">
            </div>
            <div class="img_9"><p>2€</p>
                <img src="img/9_WWF.jpg" alt="">
            </div>
            <div class="img_10"><p>1€</p>
                <img src="img/10_MC.jpg" alt="">
            </div>
        </div>
        <div id="dinero">
            <p>0€</p>
        </div>
    </div>

    <button>
        <span>Mostrar aportaciones</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74" height="34" width="34">
            <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
            <path fill="black" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"></path>
        </svg>
    </button>

    <div id="lista">
        <ul></ul>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

---

## Código CSS

```css
h1 {
    text-align: center;
    font-size: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #333;
}

ul {
    list-style-type: none;
}

#contenedor_principal {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 70vh;
    gap: 20px;
    background-color: aqua;
    justify-content: space-evenly;
}

#dinero {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    width: 200px;
    height: 200px;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
}

#plantilla_img {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    background-color: rgb(255, 255, 255);
    padding: 10px;
    width: 60vw;
    height: 70vh;
}

#plantilla_img > div {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    text-align: center;
    width: 100%;
    height: 100%;
    font-weight: bold;
    border: 1px solid black;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    padding: 0;
}

#plantilla_img > div p {
    margin-bottom: auto;
    width: 50%;
    height: 14%;
    font-size: 20px;
}

#plantilla_img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}

button {
    cursor: pointer;
    font-weight: 700;
    transition: all 0.2s;
    padding: 10px 20px;
    border-radius: 100px;
    background: #cfef00;
    border: 1px solid transparent;
    margin: 15px auto;
    display: flex;
    align-items: center;
    font-size: 15px;
}

button:hover {
    background: #c4e201;
}

button > svg {
    width: 34px;
    margin-left: 10px;
    transition: transform 0.3s ease-in-out;
}

button:hover svg {
    transform: translateX(5px);
}

button:active {
    transform: scale(0.95);
}

#lista {
    display: grid;
    font-weight: bold;
    text-align: center;
    background-color: rgb(143, 162, 224);
    font-size: 13px;
    width: 100vw;
    height: 60%;
    padding: 10px;
    border: 1px solid black;
    margin-top: 30px;
}
```

---

## Código JavaScript Completo

```javascript
// Array de objetos con toda la información de cada organización
const organizaciones = [
    { nombre: "BRAC", precio: 7 },
    { nombre: "Médicos Sin Fronteras", precio: 8 },
    { nombre: "CARE", precio: 3 },
    { nombre: "Amnistía Internacional", precio: 5 },
    { nombre: "Greenpeace", precio: 6 },
    { nombre: "Cruz Roja Internacional", precio: 9 },
    { nombre: "OXFAM", precio: 10 },
    { nombre: "Save The Children", precio: 4 },
    { nombre: "WWF", precio: 2 },
    { nombre: "Médicos del Mundo", precio: 1 }
];

// Array para almacenar todas las aportaciones realizadas
let listaAportaciones = [];
let tramiteFinalizado = false;

// Función para inicializar el sistema
function inicializar() {
    // Limpiar el array de aportaciones
    listaAportaciones = [];
    
    // Actualizar la visualización del dinero
    actualizarDinero();
    
    // Obtener todas las imágenes y convertir NodeList a Array
    const imagenes = Array.from(document.querySelectorAll('#plantilla_img img'));
    
    // Usar forEach para añadir evento click a cada imagen
    imagenes.forEach((img, index) => {
        img.addEventListener('click', () => {
            manejarClickImagen(index);
        });
    });
    
    // Añadir evento al botón
    const boton = document.querySelector('button');
    boton.addEventListener('click', mostrarResumen);
}

// Función que maneja el click en una imagen
function manejarClickImagen(index) {
    // Si ya se finalizó un trámite, limpiar todo para empezar uno nuevo
    if (tramiteFinalizado) {
        limpiarTramite();
    }
    
    // Obtener la organización usando el índice
    const organizacion = organizaciones[index];
    
    // Añadir la aportación al array
    listaAportaciones.push({
        nombre: organizacion.nombre,
        precio: organizacion.precio
    });
    
    // Actualizar visualización
    actualizarDinero();
}

// Función para actualizar la visualización del dinero usando reduce()
function actualizarDinero() {
    // Usar reduce para sumar todos los precios del array
    const totalDonado = listaAportaciones.reduce((total, aportacion) => {
        return total + aportacion.precio;
    }, 0);
    
    const divDinero = document.querySelector('#dinero p');
    divDinero.textContent = `${totalDonado}€`;
}

// Función para mostrar el resumen final
function mostrarResumen() {
    const lista = document.querySelector('#lista ul');
    
    // Si no hay aportaciones, no hacer nada
    if (listaAportaciones.length === 0) {
        return;
    }
    
    // Limpiar lista
    lista.innerHTML = '';
    
    // Crear objeto para contar aportaciones usando reduce()
    const conteoAportaciones = listaAportaciones.reduce((acumulador, aportacion) => {
        const nombre = aportacion.nombre;
        if (!acumulador[nombre]) {
            acumulador[nombre] = 0;
        }
        acumulador[nombre]++;
        return acumulador;
    }, {});
    
    // Convertir el objeto a array, ordenar alfabéticamente inverso
    const organizacionesOrdenadas = Object.keys(conteoAportaciones)
        .sort()
        .reverse();
    
    // Mostrar cada organización usando forEach()
    organizacionesOrdenadas.forEach(org => {
        const li = document.createElement('li');
        const numAportaciones = conteoAportaciones[org];
        const textoAportacion = numAportaciones === 1 ? 'aportación' : 'aportaciones';
        li.textContent = `${org} ---- ${numAportaciones} ${textoAportacion}`;
        lista.appendChild(li);
    });
    
    // Añadir línea en blanco
    const liVacio = document.createElement('li');
    liVacio.innerHTML = '&nbsp;';
    lista.appendChild(liVacio);
    
    // Calcular total usando reduce()
    const totalDonado = listaAportaciones.reduce((total, aportacion) => {
        return total + aportacion.precio;
    }, 0);
    
    // Añadir donación final
    const liTotal = document.createElement('li');
    liTotal.textContent = `Donación final: ${totalDonado} €`;
    lista.appendChild(liTotal);
    
    // Calcular y mostrar donación media
    const media = (totalDonado / listaAportaciones.length).toFixed(2);
    const liMedia = document.createElement('li');
    liMedia.textContent = `Donación media: ${media} €/aportación`;
    lista.appendChild(liMedia);
    
    // Marcar que el trámite ha finalizado
    tramiteFinalizado = true;
}

// Función para limpiar el trámite y empezar uno nuevo
function limpiarTramite() {
    // Limpiar array de aportaciones
    listaAportaciones = [];
    tramiteFinalizado = false;
    
    // Limpiar la lista
    const lista = document.querySelector('#lista ul');
    lista.innerHTML = '';
    
    // Actualizar visualización del dinero
    actualizarDinero();
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', inicializar);
```

---

## Explicación Detallada

### Parte 1: Estructura de Datos

#### 1.1 Array de Objetos (líneas 1-13)

```javascript
const organizaciones = [
    { nombre: "BRAC", precio: 7 },
    { nombre: "Médicos Sin Fronteras", precio: 8 },
    // ... resto de organizaciones
];
```

**¿Qué hace?**
- Crea un **array de objetos** donde cada elemento tiene toda la información de una organización
- Cada objeto tiene dos propiedades: `nombre` y `precio`

**Ventaja sobre arrays paralelos:**
- ❌ Antes: `nombres = ["BRAC", ...]` y `precios = [7, ...]` (dos arrays separados)
- ✅ Ahora: Un solo array con toda la información junta
- Más fácil de mantener y menos propenso a errores

#### 1.2 Variables Globales (líneas 16-17)

```javascript
let listaAportaciones = [];
let tramiteFinalizado = false;
```

**¿Qué hace?**
- `listaAportaciones`: Array que guarda cada donación realizada
- `tramiteFinalizado`: Bandera booleana para saber si ya se mostró el resumen

---

### Parte 2: Inicialización

#### 2.1 Función inicializar() (líneas 19-40)

```javascript
function inicializar() {
    listaAportaciones = [];
    actualizarDinero();
    
    const imagenes = Array.from(document.querySelectorAll('#plantilla_img img'));
    
    imagenes.forEach((img, index) => {
        img.addEventListener('click', () => {
            manejarClickImagen(index);
        });
    });
    
    const boton = document.querySelector('button');
    boton.addEventListener('click', mostrarResumen);
}
```

**Métodos de Arrays Usados:**

1. **`Array.from()`** (línea 27)
   - Convierte el NodeList de `querySelectorAll()` en un array real
   - Permite usar métodos de arrays como `forEach()`

2. **`forEach()`** (línea 30)
   - Recorre cada imagen del array
   - Parámetros: `img` (elemento actual), `index` (posición 0-9)
   - Añade evento `click` a cada imagen

**Flujo:**
```
1. Limpia el array de aportaciones
2. Actualiza visualización (muestra 0€)
3. Selecciona todas las imágenes
4. Añade evento click a cada imagen
5. Añade evento click al botón
```

---

### Parte 3: Gestión de Clics

#### 3.1 Función manejarClickImagen() (líneas 42-59)

```javascript
function manejarClickImagen(index) {
    if (tramiteFinalizado) {
        limpiarTramite();
    }
    
    const organizacion = organizaciones[index];
    
    listaAportaciones.push({
        nombre: organizacion.nombre,
        precio: organizacion.precio
    });
    
    actualizarDinero();
}
```

**Método de Array Usado:**

**`push()`** (línea 51)
- Añade un nuevo objeto al final del array `listaAportaciones`
- Cada vez que haces click, se añade una nueva entrada

**Ejemplo:**
```javascript
// Click en BRAC (índice 0)
listaAportaciones.push({ nombre: "BRAC", precio: 7 });
// Resultado: [{ nombre: "BRAC", precio: 7 }]

// Click en WWF (índice 8)
listaAportaciones.push({ nombre: "WWF", precio: 2 });
// Resultado: [
//   { nombre: "BRAC", precio: 7 },
//   { nombre: "WWF", precio: 2 }
// ]
```

#### 3.2 Función actualizarDinero() (líneas 61-69)

```javascript
function actualizarDinero() {
    const totalDonado = listaAportaciones.reduce((total, aportacion) => {
        return total + aportacion.precio;
    }, 0);
    
    const divDinero = document.querySelector('#dinero p');
    divDinero.textContent = `${totalDonado}€`;
}
```

**Método de Array Usado:**

**`reduce()`** (línea 63)
- El método más potente para acumular valores
- Recorre todo el array sumando los precios

**Parámetros de reduce():**
- `total`: Acumulador (empieza en 0)
- `aportacion`: Elemento actual del array
- `0`: Valor inicial del acumulador

**Ejemplo paso a paso:**
```javascript
// Array: [{ precio: 7 }, { precio: 2 }, { precio: 5 }]

// Iteración 1: total = 0,  aportacion.precio = 7  → devuelve 7
// Iteración 2: total = 7,  aportacion.precio = 2  → devuelve 9
// Iteración 3: total = 9,  aportacion.precio = 5  → devuelve 14
// Resultado final: 14
```

---

### Parte 4: Mostrar Resumen

#### 4.1 Validación Inicial (líneas 72-80)

```javascript
function mostrarResumen() {
    const lista = document.querySelector('#lista ul');
    
    if (listaAportaciones.length === 0) {
        return;
    }
    
    lista.innerHTML = '';
```

**Propiedad de Array Usada:**

**`.length`** (línea 76)
- Devuelve el número de elementos en el array
- Si es 0, no hay donaciones y sale de la función

#### 4.2 Contar Aportaciones con reduce() (líneas 82-91)

```javascript
const conteoAportaciones = listaAportaciones.reduce((acumulador, aportacion) => {
    const nombre = aportacion.nombre;
    if (!acumulador[nombre]) {
        acumulador[nombre] = 0;
    }
    acumulador[nombre]++;
    return acumulador;
}, {});
```

**Método de Array Usado:**

**`reduce()` para agrupar y contar** (línea 82)
- Transforma el array en un objeto que cuenta apariciones
- Valor inicial: `{}` (objeto vacío)

**Ejemplo detallado:**

Entrada:
```javascript
listaAportaciones = [
    { nombre: "BRAC", precio: 7 },
    { nombre: "WWF", precio: 2 },
    { nombre: "BRAC", precio: 7 },
    { nombre: "Greenpeace", precio: 6 }
]
```

Proceso:
```javascript
// Iteración 1: BRAC
acumulador = {}
!acumulador["BRAC"] → true → acumulador["BRAC"] = 0
acumulador["BRAC"]++ → acumulador = { "BRAC": 1 }

// Iteración 2: WWF
acumulador = { "BRAC": 1 }
!acumulador["WWF"] → true → acumulador["WWF"] = 0
acumulador["WWF"]++ → acumulador = { "BRAC": 1, "WWF": 1 }

// Iteración 3: BRAC (de nuevo)
acumulador = { "BRAC": 1, "WWF": 1 }
!acumulador["BRAC"] → false (ya existe)
acumulador["BRAC"]++ → acumulador = { "BRAC": 2, "WWF": 1 }

// Iteración 4: Greenpeace
acumulador = { "BRAC": 2, "WWF": 1 }
!acumulador["Greenpeace"] → true → acumulador["Greenpeace"] = 0
acumulador["Greenpeace"]++ → acumulador = { "BRAC": 2, "WWF": 1, "Greenpeace": 1 }
```

Resultado:
```javascript
conteoAportaciones = {
    "BRAC": 2,
    "WWF": 1,
    "Greenpeace": 1
}
```

#### 4.3 Ordenar Alfabéticamente Inverso (líneas 93-95)

```javascript
const organizacionesOrdenadas = Object.keys(conteoAportaciones)
    .sort()
    .reverse();
```

**Métodos Encadenados:**

1. **`Object.keys()`**
   - Extrae las claves (nombres) del objeto
   - Entrada: `{ "BRAC": 2, "WWF": 1, "Greenpeace": 1 }`
   - Salida: `["BRAC", "WWF", "Greenpeace"]`

2. **`.sort()`**
   - Ordena el array alfabéticamente (A-Z)
   - Resultado: `["BRAC", "Greenpeace", "WWF"]`

3. **`.reverse()`**
   - Invierte el orden del array (Z-A)
   - Resultado final: `["WWF", "Greenpeace", "BRAC"]`

**Encadenamiento de métodos:**
```javascript
// El resultado de un método pasa al siguiente
Object.keys(obj)  // devuelve array
    .sort()       // recibe array, devuelve array ordenado
    .reverse();   // recibe array ordenado, devuelve array invertido
```

#### 4.4 Mostrar Organizaciones (líneas 97-104)

```javascript
organizacionesOrdenadas.forEach(org => {
    const li = document.createElement('li');
    const numAportaciones = conteoAportaciones[org];
    const textoAportacion = numAportaciones === 1 ? 'aportación' : 'aportaciones';
    li.textContent = `${org} ---- ${numAportaciones} ${textoAportacion}`;
    lista.appendChild(li);
});
```

**Método de Array Usado:**

**`forEach()`** (línea 98)
- Recorre cada organización del array ordenado
- Crea un `<li>` para cada una
- Usa operador ternario para singular/plural

**Operador ternario:**
```javascript
condición ? valorSiTrue : valorSiFalse

// Ejemplos:
1 === 1 ? 'aportación' : 'aportaciones'  // → 'aportación'
2 === 1 ? 'aportación' : 'aportaciones'  // → 'aportaciones'
```

#### 4.5 Calcular Total y Media (líneas 110-122)

```javascript
// Total con reduce()
const totalDonado = listaAportaciones.reduce((total, aportacion) => {
    return total + aportacion.precio;
}, 0);

const liTotal = document.createElement('li');
liTotal.textContent = `Donación final: ${totalDonado} €`;
lista.appendChild(liTotal);

// Media
const media = (totalDonado / listaAportaciones.length).toFixed(2);
const liMedia = document.createElement('li');
liMedia.textContent = `Donación media: ${media} €/aportación`;
lista.appendChild(liMedia);
```

**Métodos/Propiedades Usados:**

1. **`reduce()`** (línea 110)
   - Suma todos los precios del array

2. **`.length`** (línea 119)
   - Cuenta total de aportaciones para calcular la media

3. **`.toFixed(2)`**
   - Método de números que redondea a 2 decimales
   - Ejemplo: `6.666666` → `"6.67"`

**Cálculo de media:**
```javascript
// Total: 22€, Aportaciones: 4
media = 22 / 4 = 5.5
media.toFixed(2) = "5.50"
```

---

### Parte 5: Limpiar Trámite

#### 5.1 Función limpiarTramite() (líneas 129-141)

```javascript
function limpiarTramite() {
    listaAportaciones = [];
    tramiteFinalizado = false;
    
    const lista = document.querySelector('#lista ul');
    lista.innerHTML = '';
    
    actualizarDinero();
}
```

**¿Qué hace?**
1. Reinicia el array de aportaciones a vacío: `[]`
2. Marca que no hay trámite finalizado
3. Limpia el HTML del resumen
4. Actualiza el dinero (mostrará 0€)

**Se ejecuta cuando:**
- Haces click en una imagen después de haber mostrado el resumen
- Permite empezar un nuevo ciclo de donaciones

---

## Métodos de Arrays Utilizados

### Tabla Resumen

| Método/Propiedad | Descripción | Uso en el Código | Línea |
|------------------|-------------|------------------|-------|
| **`Array.from()`** | Convierte NodeList en array | Convertir imágenes seleccionadas | 27 |
| **`forEach()`** | Recorre cada elemento | Añadir eventos a imágenes y mostrar organizaciones | 30, 98 |
| **`push()`** | Añade elemento al final | Registrar cada aportación | 51 |
| **`reduce()`** | Acumula/agrupa valores | Sumar totales y contar aportaciones | 63, 82, 110 |
| **`.length`** | Número de elementos | Validar y calcular media | 76, 119 |
| **`Object.keys()`** | Extrae claves de objeto | Obtener nombres de organizaciones | 93 |
| **`.sort()`** | Ordena alfabéticamente | Ordenar organizaciones A-Z | 94 |
| **`.reverse()`** | Invierte el orden | Ordenar Z-A (inverso) | 95 |

### Explicación Detallada de reduce()

El método `reduce()` es el más complejo pero también el más potente. Se usa de dos formas distintas en este código:

#### Forma 1: Sumar valores (líneas 63, 110)

```javascript
array.reduce((acumulador, elemento) => {
    return acumulador + elemento.precio;
}, valorInicial);
```

**Parámetros:**
- `acumulador`: Guarda el resultado parcial
- `elemento`: Elemento actual del array
- `valorInicial`: Desde donde empieza el acumulador

#### Forma 2: Agrupar y contar (línea 82)

```javascript
array.reduce((objeto, elemento) => {
    if (!objeto[elemento.nombre]) {
        objeto[elemento.nombre] = 0;
    }
    objeto[elemento.nombre]++;
    return objeto;
}, {});
```

**Diferencia:**
- Valor inicial es `{}` (objeto vacío)
- Construye un objeto en lugar de sumar números
- Útil para contar frecuencias

---

## Ventajas de Usar Arrays y sus Métodos

### 1. **Código más declarativo**
En lugar de:
```javascript
let total = 0;
for (let i = 0; i < array.length; i++) {
    total += array[i].precio;
}
```

Usamos:
```javascript
const total = array.reduce((sum, item) => sum + item.precio, 0);
```

### 2. **Menos propenso a errores**
- No hay índices manuales (`i`, `j`)
- No hay límites de bucles que controlar
- Menos variables temporales

### 3. **Más legible**
- `forEach()` → "por cada elemento"
- `reduce()` → "reducir/acumular"
- `filter()` → "filtrar elementos"
- `map()` → "transformar elementos"

### 4. **Inmutabilidad**
Algunos métodos no modifican el array original:
```javascript
const original = [3, 1, 2];
const ordenado = original.sort();  // Modifica original ⚠️
const copia = [...original].sort(); // No modifica original ✅
```

---

## Flujo Completo del Programa

### Diagrama de Flujo

```
┌─────────────────────────────────────┐
│   1. INICIALIZACIÓN                 │
│   - Limpiar variables               │
│   - Añadir eventos a imágenes       │
│   - Añadir evento a botón           │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   2. USUARIO HACE CLICK EN IMAGEN   │
└──────────────┬──────────────────────┘
               │
               ▼
      ┌────────────────┐
      │ ¿Trámite       │ SÍ
      │ finalizado?    │────────┐
      └────────┬───────┘        │
               │ NO              │
               ▼                 ▼
┌─────────────────────────┐  ┌─────────────────┐
│   3. REGISTRAR CLICK    │  │  LIMPIAR TODO   │
│   - push() aportación   │  │  - Array vacío  │
│   - reduce() sumar      │  │  - Limpiar HTML │
│   - Actualizar visual   │  └────────┬────────┘
└──────────┬──────────────┘           │
           │                           │
           └───────────┬───────────────┘
                       │
                (usuario sigue clickeando)
                       │
                       ▼
┌─────────────────────────────────────┐
│   4. USUARIO PULSA BOTÓN "MOSTRAR"  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   5. PROCESAR DATOS                 │
│   - reduce() contar aportaciones    │
│   - Object.keys() extraer nombres   │
│   - sort() ordenar A-Z              │
│   - reverse() invertir Z-A          │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   6. MOSTRAR RESUMEN                │
│   - forEach() crear <li>            │
│   - reduce() calcular total         │
│   - .length calcular media          │
│   - Marcar tramiteFinalizado=true   │
└─────────────────────────────────────┘
```

---

## Ejemplos de Uso Real

### Ejemplo Completo

**Estado Inicial:**
```javascript
listaAportaciones = []
totalDonado = 0€
```

**Usuario hace clicks:**
1. Click en "BRAC" (7€)
2. Click en "WWF" (2€)  
3. Click en "BRAC" (7€)
4. Click en "Greenpeace" (6€)

**Array después de los clicks:**
```javascript
listaAportaciones = [
    { nombre: "BRAC", precio: 7 },
    { nombre: "WWF", precio: 2 },
    { nombre: "BRAC", precio: 7 },
    { nombre: "Greenpeace", precio: 6 }
]
```

**Visualización en círculo:**
```
22€
```

**Usuario pulsa "Mostrar aportaciones":**

1. **Contar con reduce():**
```javascript
conteoAportaciones = {
    "BRAC": 2,
    "WWF": 1,
    "Greenpeace": 1
}
```

2. **Ordenar alfabéticamente inverso:**
```javascript
organizacionesOrdenadas = ["WWF", "Greenpeace", "BRAC"]
```

3. **Resultado en pantalla:**
```
WWF ---- 1 aportación
Greenpeace ---- 1 aportación
BRAC ---- 2 aportaciones

Donación final: 22 €
Donación media: 5.50 €/aportación
```

---

## Mejoras Opcionales

### 1. Validación de Datos

```javascript
// Verificar que el precio sea válido
function manejarClickImagen(index) {
    const organizacion = organizaciones[index];
    
    if (!organizacion || organizacion.precio <= 0) {
        console.error('Organización inválida');
        return;
    }
    
    listaAportaciones.push({
        nombre: organizacion.nombre,
        precio: organizacion.precio
    });
    
    actualizarDinero();
}
```

### 2. Animaciones al Añadir Donación

```javascript
function manejarClickImagen(index) {
    // ... código existente ...
    
    // Añadir efecto visual
    const divDinero = document.querySelector('#dinero');
    divDinero.classList.add('pulse');
    setTimeout(() => divDinero.classList.remove('pulse'), 300);
}
```

```css
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.pulse {
    animation: pulse 0.3s ease-in-out;
}
```

### 3. Usar map() para Transformar Datos

Si necesitas crear un array con solo los nombres:
```javascript
const soloNombres = listaAportaciones.map(aportacion => aportacion.nombre);
// Resultado: ["BRAC", "WWF", "BRAC", "Greenpeace"]
```

### 4. Usar filter() para Filtrar

Si necesitas ver solo donaciones mayores a 5€:
```javascript
const donacionesGrandes = listaAportaciones.filter(aportacion => aportacion.precio > 5);
// Resultado: [{ nombre: "BRAC", precio: 7 }, { nombre: "BRAC", precio: 7 }, ...]
```

### 5. Usar find() para Buscar

Si necesitas encontrar una aportación específica:
```javascript
const primeraWWF = listaAportaciones.find(aportacion => aportacion.nombre === "WWF");
// Resultado: { nombre: "WWF", precio: 2 }
```

---

## Depuración y Testing

### Console.log Estratégicos

Para entender qué hace el código, añade:

```javascript
function manejarClickImagen(index) {
    console.log('Click en índice:', index);
    console.log('Organización:', organizaciones[index]);
    
    const organizacion = organizaciones[index];
    listaAportaciones.push({
        nombre: organizacion.nombre,
        precio: organizacion.precio
    });
    
    console.log('Lista actualizada:', listaAportaciones);
    console.log('Total donado:', listaAportaciones.reduce((t, a) => t + a.precio, 0));
}
```

### Verificar Array en Consola

Abre las DevTools (F12) y escribe:
```javascript
// Ver todas las aportaciones
listaAportaciones

// Ver organizaciones
organizaciones

// Ver cuántas aportaciones hay
listaAportaciones.length

// Ver el total
listaAportaciones.reduce((t, a) => t + a.precio, 0)
```

---

## Preguntas Frecuentes

### ¿Por qué usar reduce() en lugar de un bucle for?

**Bucle for tradicional:**
```javascript
let total = 0;
for (let i = 0; i < listaAportaciones.length; i++) {
    total += listaAportaciones[i].precio;
}
```

**Con reduce():**
```javascript
const total = listaAportaciones.reduce((sum, item) => sum + item.precio, 0);
```

**Ventajas de reduce():**
- ✅ Menos líneas de código
- ✅ No necesita variable externa (`total`)
- ✅ No hay índices que puedan estar mal
- ✅ Más funcional y declarativo

### ¿Qué pasa si hago click muy rápido?

El código maneja múltiples clicks sin problema:
```javascript
// Click rápido en BRAC 5 veces
listaAportaciones = [
    { nombre: "BRAC", precio: 7 },
    { nombre: "BRAC", precio: 7 },
    { nombre: "BRAC", precio: 7 },
    { nombre: "BRAC", precio: 7 },
    { nombre: "BRAC", precio: 7 }
]
// Total: 35€
// Resumen: BRAC ---- 5 aportaciones
```

### ¿Puedo cambiar el orden de las organizaciones?

Sí, solo modifica el array `organizaciones`. El orden debe coincidir con el HTML:

```javascript
const organizaciones = [
    { nombre: "BRAC", precio: 7 },              // img_1
    { nombre: "Médicos Sin Fronteras", precio: 8 }, // img_2
    { nombre: "CARE", precio: 3 },              // img_3
    // ... debe coincidir con el orden del HTML
];
```

### ¿Cómo añado más organizaciones?

1. Añade el HTML en `#plantilla_img`:
```html
<div class="img_11"><p>15€</p>
    <img src="img/11_nueva.jpg" alt="">
</div>
```

2. Añade al array en JavaScript:
```javascript
const organizaciones = [
    // ... organizaciones existentes ...
    { nombre: "Nueva Organización", precio: 15 }
];
```

---

## Glosario de Términos

### Términos de JavaScript

- **Array**: Lista ordenada de elementos
- **Objeto**: Colección de propiedades clave-valor
- **Método**: Función que pertenece a un objeto/array
- **Callback**: Función que se pasa como argumento
- **Parámetro**: Variable que recibe una función
- **Acumulador**: Variable que guarda resultados parciales en reduce()
- **Índice**: Posición de un elemento en un array (empieza en 0)

### Términos del DOM

- **DOM**: Document Object Model (estructura HTML)
- **querySelector**: Selecciona un elemento del DOM
- **querySelectorAll**: Selecciona múltiples elementos
- **addEventListener**: Añade evento a un elemento
- **createElement**: Crea un nuevo elemento HTML
- **appendChild**: Añade un hijo a un elemento
- **innerHTML**: Contenido HTML de un elemento
- **textContent**: Texto de un elemento

---

## Recursos Adicionales

### Documentación Oficial

- [MDN - Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - Array.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN - Array.forEach()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN - Array.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN - Array.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### Práctica Adicional

**Ejercicio 1**: Añadir un botón "Deshacer última donación"
```javascript
function deshacerUltima() {
    if (listaAportaciones.length > 0) {
        listaAportaciones.pop(); // Elimina el último elemento
        actualizarDinero();
    }
}
```

**Ejercicio 2**: Mostrar el número de organizaciones distintas
```javascript
const organizacionesUnicas = [...new Set(listaAportaciones.map(a => a.nombre))];
console.log('Organizaciones distintas:', organizacionesUnicas.length);
```

**Ejercicio 3**: Encontrar la organización con más donaciones
```javascript
const orgMaxDonaciones = Object.entries(conteoAportaciones)
    .reduce((max, [org, count]) => count > max.count ? {org, count} : max, 
            {org: '', count: 0});
console.log('Más donada:', orgMaxDonaciones.org);
```

---

## Conclusión

Este proyecto demuestra el poder de los **métodos de arrays en JavaScript**:

✅ **`Array.from()`** - Convertir estructuras en arrays
✅ **`forEach()`** - Recorrer elementos
✅ **`push()`** - Añadir elementos
✅ **`reduce()`** - Acumular y agrupar datos
✅ **`Object.keys()`** - Extraer claves
✅ **`.sort()`** - Ordenar
✅ **`.reverse()`** - Invertir orden
✅ **`.length`** - Contar elementos

### Ventajas Principales

1. **Código limpio y mantenible**
2. **Menos errores** (sin bucles manuales)
3. **Más expresivo** (se lee como lenguaje natural)
4. **Preparado para escalar** (fácil añadir funcionalidad)

### Próximos Pasos

- Añadir persistencia con localStorage
- Implementar gráficos con los datos
- Crear un historial de donaciones
- Añadir categorías a las organizaciones
- Implementar búsqueda/filtrado

---

**Fecha de creación**: Noviembre 2025  
**Versión**: 1.0  
**Autor**: Documentación del Sistema de Donaciones Benéficas

---

## Código de Instalación

Para usar este proyecto:

1. Crea la estructura de carpetas:
```
proyecto/
├── index.html
├── script.js
├── style/
│   └── style.css
└── img/
    ├── 1_brac.jpg
    ├── 2_msf.jpg
    └── ... (resto de imágenes)
```

2. Copia el HTML en `index.html`
3. Copia el CSS en `style/style.css`
4. Copia el JavaScript en `script.js`
5. Añade las imágenes de las organizaciones en `img/`
6. Abre `index.html` en tu navegador

**¡Listo para usar!** 🎉

---

*Fin del documento*