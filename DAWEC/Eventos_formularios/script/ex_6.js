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
    });
});