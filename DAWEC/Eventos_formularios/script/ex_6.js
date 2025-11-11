document.addEventListener('DOMContentLoaded', function(){
    let firtsH2 = document.querySelector('h2');
    let todosParrafos= document.querySelectorAll('p');
    let segundoParrafo = todosParrafos[1];
    let quintoParrafo = todosParrafos[4];

    firtsH2.addEventListener('click', function(){
    console.log('H2 clickeado'); 
        if (segundoParrafo.style.display === 'none') {
        segundoParrafo.style.display ='';
        quintoParrafo.style.display = '';
        
    } else {
        segundoParrafo.style.display ='none';
        quintoParrafo.style.display = 'none';
    }

    let inputText = document.querySelectorAll('input[type="text"]')
    inputText.forEach(input => {
        let sizeActual = parseInt(input.getAttribute('size')) || 0;
        input.setAttribute('size', sizeActual + 5);
        });

    })

    let labels = document.querySelectorAll('label');
    let labelSex;
    labels.forEach(label => {
        if(label.textContent.includes('Escoge el sexo')){
            labelSex = label;
        }});
    
    labelSex.addEventListener('mouseover', function(){
        let inputRadio = document.querySelectorAll('input[type="radio"]');
        inputRadio.forEach(radio => {
            radio.removeAttribute('name');

        })

    })
    





});
