function toggleMobileNav() {
  $("#MobMenu").toggleClass('mob-nav--closed').toggleClass('mob-nav--open')
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#MobMenuToggle') 
    && $("#MobMenu").hasClass('mob-nav--open')
    && !$(event.target).hasClass('mob-nav__menu') ) {
    $("#MobMenu").addClass('mob-nav--closed').removeClass('mob-nav--open')
  }
}