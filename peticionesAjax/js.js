function comprobar3a(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(datosTareas => console.log(datosTareas))
}

function comprobar3b(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(datosTareas => console.log(datosTareas))
}

function comprobar3c(){
    fetch("https://jsonplaceholder.typicode.com/todos/201")
    .then(response => response.status())
    .then(estado => console.log(estado))
}

function comprobar3d(){
    let nuevaTarea ={
        userId:5,
        title: "Prueba de POST",
        completed:false
    };
    
    let init ={
        method: 'POST',
        body: JSON.stringify(nuevaTarea),
        headers: {'Content-Type' : 'application/json'}
    }

    fetch("https://jsonplaceholder.typicode.com/todos", init)
    .then(response => {
        console.log(response);
        if (response.status ==201)
            return response.json();
        return "error";
})
    .then(datosDevueltos => console.log(datosDevueltos))
}