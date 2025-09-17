function numeroPositivo(){
    let num = Number(prompt("Escribe un número: "));
    if(num > 0) {
        return "El numero es positivo";
    }else if (num < 0){
        return "El numero es negativo"
    } else{
    return "El número es cero";
    }
}
numeroPositivo();

function conversor(){
    let euro = Number(prompt("Escribe el valor en euros: "));
    let dolar = (euro * 8.44);
    return "Tienes " + dolar + " dolares";
}

conversor();