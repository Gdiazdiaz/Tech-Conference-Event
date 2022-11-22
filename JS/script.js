const openMenu = document.querySelector('#menu-button');
const closeButton = document.querySelector('.close-button');
const menu = document.querySelector('.menu-items');

function OpenM(){
    menu.style.display = 'flex';
    closeButton.style.display = 'block';
    openMenu.style.display = 'none';
}

function CloseM(){
    menu.style.display = 'none';
    closeButton.style.display = 'none';
    openMenu.style.display = 'block';
}

openMenu.addEventListener('click',OpenM);
closeButton.addEventListener('click',CloseM);