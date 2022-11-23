const openMenu = document.querySelector('#menu-button');
const closeButton = document.querySelector('.close-button');
const menu = document.querySelector('.menu-items');
const bak = document.querySelector('.button-container');
const cards = document.querySelector('.spk-card-container');

function OpenM() {
  menu.style.display = 'flex';
  closeButton.style.display = 'block';
  openMenu.style.display = 'none';
  bak.style.display = 'block';
}

function CloseM() {
  menu.style.display = 'none';
  closeButton.style.display = 'none';
  openMenu.style.display = 'block';
  bak.style.display = 'none';
}

openMenu.addEventListener('click', OpenM);
closeButton.addEventListener('click', CloseM);

const cardlist = [
  {
    imgUrl: 'CSS/media/card-pictures/spk-1.png',
    name: 'Glenda Diaz',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
  {
    imgUrl: 'CSS/media/card-pictures/spk-1.png',
    name: 'Glenda Diaz',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
  {
    imgUrl: 'CSS/media/card-pictures/spk-1.png',
    name: 'Glenda Diaz',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
  {
    imgUrl: 'CSS/media/card-pictures/spk-1.png',
    name: 'Glenda Diaz',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
  {
    imgUrl: 'CSS/media/card-pictures/spk-1.png',
    name: 'Glenda Diaz',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
  {
    imgUrl: 'CSS/media/card-pictures/spk-1.png',
    name: 'Glenda Diaz',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
];

let cardgenerator = '';

cardlist.forEach((card) => {
  cardgenerator += `
    <!-- recent work card ${card.id + 1} -->
    <div class="spk-card">
                <img class="spk-card-img" src="${card.imgUrl}">
                <div class="spk-card-content">
                    <h4 class="spk-card-name">${card.name}</h4>
                    <h5 class="spk-card-title">${card.title}</h5>
                    <p class="spk-card-text">${card.description}</p>
                </div>
            </div>
    `;
});

cards.innerHTML += cardgenerator;