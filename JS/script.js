const openMenu = document.querySelector('#menu-button');
const closeButton = document.querySelector('.close-button');
const menu = document.querySelector('.menu-items-mobile');
const bak = document.querySelector('.button-container-mobile');
const cards = document.querySelector('.spk-card-container');

function openM() {
  menu.style.display = 'flex';
  closeButton.style.display = 'block';
  openMenu.style.display = 'none';
  bak.style.display = 'block';
}

function closeM() {
  menu.style.display = 'none';
  closeButton.style.display = 'none';
  openMenu.style.display = 'block';
  bak.style.display = 'none';
}

openMenu.addEventListener('click', openM);
closeButton.addEventListener('click', closeM);

const cardlist = [
  {
    imgUrl: 'CSS/media/card-pictures/spk-1.jpg',
    name: 'Mátyás Gombos',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
  {
    imgUrl: 'CSS/media/card-pictures/spk-2.jpg',
    name: 'Didier Peran Ganthier',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
  {
    imgUrl: 'CSS/media/card-pictures/spk-3.jpg',
    name: 'Cesar Alberto Valencia Aguilar',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
  {
    imgUrl: 'CSS/media/card-pictures/spk-4.jpg',
    name: 'Nurudeen Salifu',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
  {
    imgUrl: 'CSS/media/card-pictures/spk-5.jpg',
    name: 'Odette Gleen Nkah',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
  {
    imgUrl: 'CSS/media/card-pictures/spk-6.jpg',
    name: 'Losalini Rokocakau',
    title: 'Math Professor and Full Stack Developer',
    description: 'Glenda studied her Bachelor in math and is also an graduate from Microverse Full Stack Program',
  },
];

let cardgenerator = '';

cardlist.forEach((card) => {
  cardgenerator += `
    <!-- recent work card ${card.id + 1} -->
    <div class="spk-card">
                <img class=photo-sticker src="CSS/media/card-pictures/photo-sticker.png">
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