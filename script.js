let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-xmark'); // Font Awesome close icon
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.add('fa-bars');
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}