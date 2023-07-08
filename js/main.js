const burguerIcon = document.querySelector('.nav__icon');
const menu = document.querySelector('.nav__container');
 let menuOpen = false;



// const handleMenuToggle = () => {
//   if(menuOpen) {
//     logo.src= '/assets/images/mindfully_white.svg';
//     burguerIcon.src = '/assets/icons/icons8-close.svg ';
//     menuOpen = false;
//   } else {
//     logo.src = "/assets/images/mindfully_logo.svg";
//     burguerIcon.src= '/assets/icons/icons8-menu.svg';
//     menuOpen = true;
//   }
  
//   if(window.innerWidth >= 768){
//     menu.classList.toggle('nav__list--show');
//    }
// }


burguerIcon.addEventListener('click', () => {

  const logo = document.querySelector('.nav__logo');

  menu.classList.toggle('nav__container--active');

  if(menu.classList.contains("nav__container--active")){
    logo.setAttribute("src", "/assets/images/mindfully_white.svg");
    burguerIcon.setAttribute("src", "/assets/icons/icons8-close.svg" );
  }else {
    logo.setAttribute("src", "/assets/images/mindfully_logo.svg");
    burguerIcon.setAttribute("src", '/assets/icons/icons8-menu.svg' );
  }
     
 })
