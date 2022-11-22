const openMenu = document.querySelector('#menu-button');
const closeButton = document.querySelector('.close-button');
const menu = document.querySelector('.menu-items');
const bak = document.querySelector('.button-container');

function OpenM(){
    menu.style.display = 'flex';
    closeButton.style.display = 'block';
    openMenu.style.display = 'none';
    bak.style.display = 'block';
}

function CloseM(){
    menu.style.display = 'none';
    closeButton.style.display = 'none';
    openMenu.style.display = 'block';
    bak.style.display = 'none';
}

openMenu.addEventListener('click',OpenM);
closeButton.addEventListener('click',CloseM);