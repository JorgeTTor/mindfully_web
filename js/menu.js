const burguerIcon = document.querySelectorAll('.nav__icon');
const menu = document.querySelector('.nav__list');

burguerIcon.forEach(element => {
  element.addEventListener('click', () => {
    console.log('Holla mundo')
    
    // element.classList.toggle();

    menu.classList.toggle('nav__list--show');
  })
})