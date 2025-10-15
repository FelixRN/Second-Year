function comenzarAccion(accion){
    let texto = document.getElementById("textArea").value;
    let arrayPalabras = texto.split(" ");
    ordenarPalabras(arrayPalabras);
}

function ordenarPalabras(arrayPalabras){

    arrayPalabras.sort((palabra1, palabra2) =>{
        if(palabra1[1]< palabra2[2]){
            return -1;
        }
        if (palabra2[1] < palabra1[1]){
            return 1;
        }
        return 0;
    });
    alert(arrayPalabras.join("_"));
    console.log(arrayPalabras.reduce((valorAnt, valorNuevo) => valorAnt + valorNuevo[0], "*"));

}

function calcularOcurrencias(){

}


