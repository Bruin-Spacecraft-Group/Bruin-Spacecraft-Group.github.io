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

//mission highlight function
var buffer = 300
$(document).ready(function(){
  $(window).scroll(function() {
    var top = $(document).scrollTop()
    if (top > ($("#mission1").position().top - buffer) && top < ($("#mission2").position().top - buffer)){
      //console.log("here 1")
      $("#mission1_image").show()
      $("#mission2_image").hide()
      $("#mission3_image").hide()
      $("#mission4_image").hide()
    }
    else if (top >  $("#mission2").position().top - buffer && top < ($("#mission3").position().top - buffer)) {
      //console.log("here 2")
      $("#mission1_image").hide()
      $("#mission2_image").show()
      $("#mission3_image").hide()
      $("#mission4_image").hide()
    }
    else if (top > $("#mission3").position().top - buffer && top < ($("#mission4").position().top - buffer)) {
      //console.log("here 3")
      $("#mission1_image").hide()
      $("#mission2_image").hide()
      $("#mission3_image").show()
      $("#mission4_image").hide()
    } else if (top > $("#mission4").position().top - buffer) {
      //console.log("here 3")
      $("#mission1_image").hide()
      $("#mission2_image").hide()
      $("#mission3_image").hide()
      $("#mission4_image").show()
    }
  });
});
