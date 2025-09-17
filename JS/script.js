function numeroPositivo(){
    let num = Number(prompt("Escribe un número: "));
    if(num > 0) {
        console.log("El numero es positivo");
        return;
    }else if (num < 0){
        console.log("El numero es negativo");
        return;
    } else{
        console.log("El número es cero");
        return;
    }
}

numeroPositivo();
/*
function conversor(){
    let euro = Number(prompt("Escribe el valor en euros: "));
    let dolar = (euro * 8.44);
    return "Tienes " + dolar + " dolares";
}

conversor();*/