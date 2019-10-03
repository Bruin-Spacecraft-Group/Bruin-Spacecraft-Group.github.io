// Toggle dropdown menu
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  //console.log(event.target)
  if (event.target.matches('#mob-nav__container') || event.target.matches('#mob-nav__burger')
    || event.target.matches('#burger') || event.target.matches('#MobMenuToggle')){
    if ($('#MobMenu').hasClass('mob-nav--open')){
      $('#MobMenu').removeClass('mob-nav--open')
      $('#MobMenu').addClass('mob-nav--closed')
      //console.log("closing")
    }
    else{
      $('#MobMenu').addClass('mob-nav--open')
      $('#MobMenu').removeClass('mob-nav--closed')
      //console.log("opening")
    }
  }
  else {
    if ($(event.target).closest("#MobMenu").length > 0){
      console.log("leaving open")
    }
    else if ($('#MobMenu').hasClass('mob-nav--open')){
      $('#MobMenu').removeClass('mob-nav--open')
      $('#MobMenu').addClass('mob-nav--closed')
      //console.log("closing")
    }
    else{
      //console.log("do nothing")
    }
  }
}


function toggleMenu(childMenu) {
  parentMenu = document.getElementById(childMenu).dataset.parent
  document.getElementById(parentMenu).classList.toggle('mob-nav__menu--closed')
  document.getElementById(parentMenu).classList.toggle('mob-nav__menu--open')
  $("#"+childMenu).toggleClass('mob-nav__menu--closed').toggleClass('mob-nav__menu--open')
}
