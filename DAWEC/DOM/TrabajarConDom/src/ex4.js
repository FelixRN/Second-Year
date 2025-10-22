

function createh2(){
    const h2 = document.createElement('h2');
    h2.textContent = 'PRUEBALOREM';
    const lorem = document.getElementsByTagName('p')[0];
    lorem.insertBefore(h2, lorem.firstChild);
}
createh2();

function firstP(){
    const p1 = document.getElementsByTagName('p')[1];
    const p3 = document.getElementsByTagName('p')[4];

    p3.insertBefore(p1, p3.firstChild);
}

firstP();