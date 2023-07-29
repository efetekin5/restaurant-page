import pageLoad from "./page-load";

export default function menu() {
    let content = document.querySelector('#content');
    content.innerHTML = '';


    content.innerHTML =  ' <div class="container"><div class="menuNavDiv"><ul class="menuNavBar"><li class="homeButton">home</li><li>menu</li><li>reservations</li><li>contact</li></ul></div><><h1 class="menuHeader">Our Food Menu</h1><div class="menuContent"><div class="gridDiv"><h1 class="newHeader">main course</h1><h2>Super Delicious Zuppa Toscana</h2><h2>Bacon Coli Baked Australian Beef</h2></div><div class="gridDiv"><h1 class="newHeader">Soups & Salads</h1><h2>Salat Banana Flower</h2><h2>Gourmet Mushroom Risotto</h2></div><div class="gridDiv"><h1 class="newHeader">Desserts</h1><h2>Ice Cream Tarte Apple</h2><h2>Fruit Mile Feuile</h2></div><div class="gridDiv"><h1 class="newHeader">Drinks</h1><h2>Double Chocolate Mud Pie</h2><h2>Panmacotte Cream Cake</h2></div></div></></div> ';

    createElement
    let homeButton = document.querySelector('.homeButton');
    console.log(homeButton);
    homeButton.addEventListener('click', pageLoad);
}



<div class="container"><div class="menuNavDiv"><ul class="menuNavBar"><li>home</li><li>menu</li><li>reservations</li><li>contact</li></ul></div><><h1 class="menuHeader">Our Food Menu</h1><div class="menuContent"><div class="gridDiv"><h1 class="newHeader">main course</h1><h2>Super Delicious Zuppa Toscana</h2><h2>Bacon Coli Baked Australian Beef</h2></div><div class="gridDiv"><h1 class="newHeader">Soups & Salads</h1><h2>Salat Banana Flower</h2><h2>Gourmet Mushroom Risotto</h2></div><div class="gridDiv"><h1 class="newHeader">Desserts</h1><h2>Ice Cream Tarte Apple</h2><h2>Fruit Mile Feuile</h2></div><div class="gridDiv"><h1 class="newHeader">Drinks</h1><h2>Double Chocolate Mud Pie</h2><h2>Panmacotte Cream Cake</h2></div></div></></div>