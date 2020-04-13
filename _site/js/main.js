var modal

$(document).ready(function() {

  if ($("#myModal").length > 0) {
    // Get the modal
    modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("mailing-list-close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

  }

})

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
    } else {
      $('#MobMenu').addClass('mob-nav--open')
      $('#MobMenu').removeClass('mob-nav--closed')
      //console.log("opening")
    }
  } else {
    if ($(event.target).closest("#MobMenu").length > 0){
      console.log("leaving open")
    } else if ($('#MobMenu').hasClass('mob-nav--open')){
      $('#MobMenu').removeClass('mob-nav--open')
      $('#MobMenu').addClass('mob-nav--closed')
      //console.log("closing")
    } else {
      //console.log("do nothing")
    }
  }

  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function toggleMenu(childMenu) {
  parentMenu = document.getElementById(childMenu).dataset.parent
  document.getElementById(parentMenu).classList.toggle('mob-nav__menu--closed')
  document.getElementById(parentMenu).classList.toggle('mob-nav__menu--open')
  $("#"+childMenu).toggleClass('mob-nav__menu--closed').toggleClass('mob-nav__menu--open')
}
