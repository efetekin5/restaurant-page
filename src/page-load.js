import menu from './menu.js';

export default function pageLoad() {
    let content = document.querySelector('#content');


    let leftDiv = document.createElement('div');
    leftDiv.classList.add('left');

    let p = document.createElement('p');
    p.textContent = 'some useless text';

    let h1 = document.createElement('h1');
    h1.textContent = 'some more useless text but longer and more detailed';

    let button = document.createElement('button');
    button.classList.add('discoverButton');
    button.textContent = 'Discover';

    leftDiv.appendChild(p);
    leftDiv.appendChild(h1);
    leftDiv.appendChild(button);


    let rightDiv = document.createElement('div');
    rightDiv.classList.add('right');

    let img = document.createElement('img');
    img.src = '../dist/food.jpg';

    let navDiv = document.createElement('div');
    navDiv.classList.add('navdiv');

    let ul = document.createElement('ul');
    ul.classList.add('navbar');

    let li1 = document.createElement('li');
    li1.textContent = 'Home';

    let li2 = document.createElement('li');
    li2.textContent = 'Menu';
    li2.classList.add('menuButton');
    li2.addEventListener('click', menu)

    let li3 = document.createElement('li');
    li3.textContent = 'Reservations';

    let li4 = document.createElement('li');
    li4.textContent = 'Contact';

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    navDiv.appendChild(ul);

    rightDiv.appendChild(img);
    rightDiv.appendChild(navDiv);


    content.appendChild(leftDiv);
    content.appendChild(rightDiv);
}