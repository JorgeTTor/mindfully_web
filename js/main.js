const burguerIcon = document.querySelector('.nav__icon');
const logo = document.querySelector('.nav__logo');
const menu = document.querySelector('.nav__list');
let open = false;


const handleMenutoggle = () => {
  if(open) {
    logo.src= '/assets/images/mindfully_white.svg';
    burguerIcon.src = '/assets/icons/icons8-close.svg ';
    open = false;
  } else {
    logo.src = "/assets/images/mindfully_logo.svg";
    burguerIcon.src= '/assets/icons/icons8-menu.svg';
    open = true;
  }
  menu.classList.toggle('nav__list--show');
}

burguerIcon.addEventListener('click', () => {
  if(window.innerWidth < 768 ) {
    handleMenutoggle();
  }
});

window.addEventListener('resize', () => {
  if(window.innerWidth >= 768) {
    open = false;
    menu.classList.add('nav__list--show');
  } else {
    menu.classList.remove('nav__list--show');
  }
})
