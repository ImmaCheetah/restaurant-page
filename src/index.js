import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

// Variables
const navBarDiv = document.getElementById('nav-bar');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');
const content = document.getElementById('content');

homeBtn.textContent = 'HOME';
menuBtn.textContent = 'MENU';
contactBtn.textContent = 'CONTACT';

navBarDiv.appendChild(homeBtn);
navBarDiv.appendChild(menuBtn);
navBarDiv.appendChild(contactBtn);


// Event Listeners
homeBtn.addEventListener('click', function() {
    content.textContent = '';
    homePage();
})



console.log('oi fam');
// menuPage();
// contactPage();