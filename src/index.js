import './style.css'
import image from './img/food.jpg';


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

function renderHomepage() {
    const header = document.createElement('h1');
header.textContent="Welcome to Trynax Restaurant!";
navContent.appendChild(header);
const img = document.createElement('img');
img.src=image;
navContent.appendChild(img);
navContent.classList.add('nav-contents')
 img.classList.add('homepage-img')
 const bottominfo = document.createElement('h3');
 bottominfo.textContent="The best food in the world";
 navContent.appendChild(bottominfo);
}

 contactNav.addEventListener('click',()=>{
    navContent.innerHTML=" "
    const ContactContet = document.createElement('div');
    navContent.appendChild(ContactContet);
    const contactHeader = document.createElement('h1')
    contactHeader.textContent="Contacts";
    ContactContet.appendChild(contactHeader);
    const contactDetails = document.createElement('div');
    ContactContet.appendChild(contactDetails);
    const address = document.createElement('p');
    address.textContent="Fictional Street, X, Fictional City";
    contactDetails.appendChild(address);
    const telephone = document.createElement('p');
    telephone.textContent="Telephone: 1234567890";
    contactDetails.appendChild(telephone);
    const email = document.createElement('p');
    email.textContent="example@email.com";
    contactDetails.appendChild(email);
    contactHeader.style.fontSize='50px';
    contactHeader.style.textAlign='center';
    contactDetails.classList.add('contact-details')




});

menuNav.addEventListener('click', ()=>{
    navContent.innerHTML=" "
    const menuContet = document.createElement('div');
    navContent.appendChild(menuContet);
    const menuHeader = document.createElement('h1')
    menuHeader.textContent="Menu";
    menuContet.appendChild(menuHeader);
    const menuDetails = document.createElement('div');
    menuContet.appendChild(menuDetails)
    const rice = document.createElement('p')
    rice.textContent="Rice";
    
    const beans = document.createElement('p')
    beans.textContent="Beans"
    const amala= document.createElement('p')
    amala.textContent="Amala"
    const eba = document.createElement('p')
    eba.textContent="Eba"
    menuDetails.appendChild(rice)
    menuDetails.appendChild(beans)
    menuDetails.appendChild(amala)
    menuDetails.appendChild(eba)
    menuDetails.classList.add('menudetails')
});
navLinks.appendChild(homeNav);
navLinks.appendChild(contactNav);
navLinks.appendChild(menuNav);
content.appendChild(navLinks);
content.appendChild(navContent);



renderHomepage();

homeNav.addEventListener('click',()=>{
    navContent.innerHTML=" ";
   renderHomepage()
})