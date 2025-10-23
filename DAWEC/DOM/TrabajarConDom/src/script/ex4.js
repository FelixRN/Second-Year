document.addEventListener('DOMContentLoaded', createH2)
    function createH2(){
    
        let sT = document.getElementById('seccionTercera');
        let pP = sT.querySelector('p');
    
        let newH2 = document.createElement('h2');
        newH2.textContent = 'Lorem Ipsum de nuevo';

        pP.addEventListener('click', function(){
            sT.insertBefore(newH2, pP);
});
    }

document.addEventListener('DOMContentLoaded', movetP);
function movetP(){
    let sT = document.getElementById('seccionTercera');
    let sP = document.getElementById('seccionPrimera');

    //const pT = sP.lastChild;
    let pT = sP.querySelectorAll('p')[2];

    pT.addEventListener('click', function(){
    sT.insertBefore(pT, sT.firstChild);
    }
)
};

document.addEventListener('DOMContentLoaded', createDiv);
function createDiv(){
    let sDiv = document.getElementById('seccionSegunda');
    let encabezado = sDiv.querySelector('h2');
    let sL = document.getElementById('seccionLista');

encabezado.addEventListener('click', function(){
    let newDiv = document.createElement('div');
    newDiv.id = 'DivNuevo';

    let clone = sL.cloneNode(true);
    newDiv.appendChild(clone);
    
    if (!document.getElementById('DivNuevo')) {
    /*sDiv.insertBefore(newDiv, sDiv.nextSibling);*/    
    sDiv.parentNode.insertBefore(newDiv, sDiv.nextSibling);
}
    });
}
    
document.addEventListener('DOMContentLoaded', function() {
    let h1 = document.querySelector('.destacado');
    h1.addEventListener('mouseover', function() {
        let listaNueva = document.querySelector('#DivNuevo ul');
        if (listaNueva && listaNueva.lastElementChild) {
            listaNueva.removeChild(listaNueva.lastElementChild);
        }
    });
});
