function toggleMobileNav() {
  if ($("#MobMenu").hasClass("mob-nav--closed")) {
    $("#MobMenu").removeClass("mob-nav--closed")
    $("#MobMenu").addClass("mob-nav--open")
  }
  else{
    $("#MobMenu").removeClass('mob-nav--open')
    $("#MobMenu").addClass('mob-nav--closed')
  }
}

function toggleMenu(childMenu) {
  parentMenu = document.getElementById(childMenu).dataset.parent
  console.log(parentMenu)
  document.getElementById(parentMenu).classList.toggle('mob-nav__menu--closed')
  document.getElementById(parentMenu).classList.toggle('mob-nav__menu--open')
  $("#"+childMenu).toggleClass('mob-nav__menu--closed').toggleClass('mob-nav__menu--open')
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (event.target.matches('#burger') || !$("#MobMenu").hasClass('mob-nav--open') || $.contains(document.getElementById("MobMenu") , event.target) ) {
    return
  }
  else {
    $("#MobMenu").addClass('mob-nav--closed').removeClass('mob-nav--open')
  }
}
