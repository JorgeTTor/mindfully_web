const burguerIcon = document.querySelector('.nav__icon');
const logo = document.querySelector('.nav__logo');
const menu = document.querySelector('.nav__list');
let openMenu = true;

const handleMenuToggle = () => {
  if(openMenu) {
    logo.src= '/assets/images/mindfully_white.svg';
    burguerIcon.src = '/assets/icons/icons8-close.svg ';
    openMenu = false;
  } else {
    logo.src = "/assets/images/mindfully_logo.svg";
    burguerIcon.src= '/assets/icons/icons8-menu.svg';
    openMenu = true;
  }

  menu.classList.toggle('nav__list--show');

}

 burguerIcon.addEventListener('click', () => {
   if(window.innerWidth < 768 ) {
     handleMenuToggle();
  }
 })

