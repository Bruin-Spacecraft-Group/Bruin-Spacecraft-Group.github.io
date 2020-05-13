//mission highlight function
var buffer = 300
$(document).ready(function(){
    $("#mission2_image").hide()
    $("#mission3_image").hide()
    $("#mission4_image").hide()

    $(window).scroll(function() {
        var top = $(document).scrollTop()
        try {
            if (top > ($("#mission0").position().top - buffer) && top < ($("#mission1").position().top - buffer)){
                //console.log("here 1")
                $("#mission0_image").show()
                $("#mission1_image").hide()
                $("#mission2_image").hide()
                $("#mission3_image").hide()
            }
            else if (top >  $("#mission1").position().top - buffer && top < ($("#mission2").position().top - buffer)) {
                //console.log("here 2")
                $("#mission0_image").hide()
                $("#mission1_image").show()
                $("#mission2_image").hide()
                $("#mission3_image").hide()
            }
            else if (top > $("#mission2").position().top - buffer && top < ($("#mission3").position().top - buffer)) {
                //console.log("here 3")
                $("#mission0_image").hide()
                $("#mission1_image").hide()
                $("#mission2_image").show()
                $("#mission3_image").hide()
            } else if (top > $("#mission3").position().top - buffer) {
                //console.log("here 3")
                $("#mission0_image").hide()
                $("#mission1_image").hide()
                $("#mission2_image").hide()
                $("#mission3_image").show()
            }
        } catch(err) {
            console.log(err)
        }
    });
});
