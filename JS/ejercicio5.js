function fibonacci(){

    numero = prompt("Ingrese un número");
    var fib = [];
    let num1 =0;
    let num2 =0;
    let max = prompt("Resultado:");

    for(let i=1 ; i<max; i++)
        num2 = numero + num1;
        numero = num1;
        num1 = num2;
        
}

function fibona() {
    let numero = parseInt(prompt("Ingrese un número"));
    let num1 = 0;
    let num2 = 1;
    let resultado = "";

    console.log("Fibonacci: ");

    for (let i = 0; i < numero; i++) {

        resultado += num1 + " ";
        console.log(resultado);
        let nresult = num1 + num2;
        console.log(nresult);
        num1 = num2;
        console.log(num1);
        num2 = nresult;
        console.log(num2);
    }
    console.log(resultado.trim());
}
fibona();