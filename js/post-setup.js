
$(document).ready(function() {
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
    window.onbeforeunload = function(){
	    window.scrollTo(0,0);
    }
    Materialize.showStaggeredList('.tabs-content');
    $('.tabs > li').on('click', function() {
      Materialize.fadeInImage('.tabs-content');
    });
    console.log("Setup Complete");
});
