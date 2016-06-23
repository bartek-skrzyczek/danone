
//HAMBURGER MENU FUNCTION

function hamburgerToggle(){

$('.hamburger-menu').on('click', function (e) {
    e.preventDefault();    
    $(this).toggleClass('open');
    $('.menu-horizontal').toggleClass('slide-down');
        }
     )
   };
    hamburgerToggle();
  
  /*
  function hamburgerToggle(){
    var hamburger = document.getElementsByClassName("hamburger-menu")[0]; //return array? querySelectorAll() vs querySelector
    hamburger.addEventListener('click', function(){
        this.hamburger
    }
    );
}
  
  
   hamburgerToggle();
   
    */