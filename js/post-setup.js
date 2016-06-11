$(document).ready(function () {
    $('.button-collapse').sideNav({
        closeOnClick: true 
    });

    $(".parallax").parallax();
    window.onbeforeunload = function(){
	    window.scrollTo(0,0);
    }

    console.log("Setup Complete");
});

function carsonsBio() {
  console.log("Button Pressed");
  $('.carsons-bio').funnyText({
    speed: 700,
    borderColor: 'black',
    activeColor: 'white',
    color: 'black',
    fontSize: '15px',
    direction: 'both'
  });
}
