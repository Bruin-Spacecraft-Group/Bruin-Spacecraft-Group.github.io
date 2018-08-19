//mission highlight function
var buffer = 300
$("#mission1_image").show()
$("#mission2_image").hide()
$("#mission3_image").hide()
$("#mission4_image").hide()

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
