let headBurger = document.querySelector('.header_burger');
let headMenu = document.querySelector('.header_menu');
let menuOpen = false;

headBurger.addEventListener('click', () =>{
  if (!menuOpen) {
    headBurger.classList.add('active'); 
    headMenu.classList.add('active'); 
    menuOpen = true;
  } else  {
     headBurger.classList.remove('active'); 
     headMenu.classList.remove('active'); 
     menuOpen = false;
  }
});




