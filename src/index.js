import './style.css'


const content = document.getElementById('content');
content.classList.add('content')
const navLinks = document.createElement('div');
const homeNav = document.createElement('a');
homeNav.setAttribute('href','#');
homeNav.textContent = "Home";

const contactNav = document.createElement('a');
contactNav.setAttribute('href','#');
contactNav.textContent='Contact';
const menuNav = document.createElement('a');
menuNav.setAttribute('href','#');
menuNav.text='Menu'
navLinks.classList.add('nav-links');
homeNav.classList.add('home-nav');

const navContent = document.createElement('div');
navContent.classList.add('nav-content');
const header = document.createElement('h1');
header.textContent="Welcome to Trynax Restaurant!";
navContent.appendChild(header);
header.style.textAlign="center";


navLinks.appendChild(homeNav);
navLinks.appendChild(contactNav);
navLinks.appendChild(menuNav);
content.appendChild(navLinks);
content.appendChild(navContent);

