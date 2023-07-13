const burguerIcon = document.querySelector('.nav__icon');
const menu = document.querySelector('.nav__container');
 let menuOpen = false;

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

 window.addEventListener("resize", () => {

    const menuActive = document.querySelector(".nav__container--active");

    if (menuActive) {
      const logo = document.querySelector('.nav__logo');
      
      menu.classList.remove("nav__container--active");
      logo.setAttribute("src", "/assets/images/mindfully_logo.svg");
      burguerIcon.setAttribute("src", '/assets/icons/icons8-menu.svg' );
    }

 })