const menu = document.querySelectorAll('.nav__icon');

menu.forEach(element => {
  element.addEventListener('click', () => {
    console.log('Holla mundo')
    
    element.classList.toggle();
  })
})