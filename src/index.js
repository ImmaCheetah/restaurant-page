import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

const navBarDiv = document.createElement('div');
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

content.appendChild(navBarDiv);

console.log('oi fam');
// homePage();
// menuPage();
// contactPage();