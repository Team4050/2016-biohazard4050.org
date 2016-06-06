
$(document).ready(function() {
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
    window.onbeforeunload = function(){
	    window.scrollTo(0,0);
    }
    console.log("Setup Complete");
});
