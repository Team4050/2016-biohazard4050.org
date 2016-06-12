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

var clickCount = 0;

function doDaMagic() {
  clickCount++;
  console.log(clickCount);
  if (clickCount >= 2) {
    Materialize.toast("You have found one of the many easter eggs... See if you can find them <span class=\"easter-egg-toast\" onclick=\"document.getElementById('egg-bio-text').style.transform = 'rotate(180deg)';console.log('done');\">&nbsp;all</span>!", 4000);
  }
}
