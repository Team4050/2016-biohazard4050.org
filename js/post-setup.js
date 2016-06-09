
$(document).ready(function () {
    $('.button-collapse').sideNav({
        closeOnClick: true 
    });

    $(".parallax").parallax();
    window.onbeforeunload = function(){
	    window.scrollTo(0,0);
    }
    NProgress.done();
    console.log("Setup Complete");
});
