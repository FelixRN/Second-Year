function color(){

    let arrayColores = [];
    let color = "";
    let reconocidos = 0;
    while(true){
        let color = prompt("Ingrese un color (rojo, verde):").toLowerCase();
        switch(color){
            case "rojo":
                console.log("El color es rojo");
                reconocidos++;
                break;
            case "verde":
                console.log("El color es verde");
                reconocidos++;
               
            default:
                console.log("Color no reconocido y añadido");
                arrayColores.push(color);
                
        }
        if(color === "rojo"){
            break;
        }
    }
    console.log("Colores reconocidos añadidos: " + reconocidos);
    console.log("Colores no reconocidos añadidos: " + arrayColores.length);
}
    color();

    function comprobarColor(){
        let color ="";
        let colores = [];
        let contador = 0;

        do{
            color = prompt("Ingrese un color");
            contador++;

            if (color == "rojo"){
                break;
            } if (color == "verde"){
                continue;
            }
            colores[colores.length] = color;
            
        } while (color != "rojo");
        alert(contador+ "_" + colores);
    }
    comprobarColor();