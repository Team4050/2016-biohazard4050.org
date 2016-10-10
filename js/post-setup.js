$(document).ready(function () {
  initMaterialize();
  initPage();
});

function initPage() {
  $(".static-content").load("static.html");
  console.log(window.location.pathname);
  makeLines();
}

function initMaterialize() {
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
}


//var clickCount = 0;

//function doDaMagic() {
//  clickCount++;
//  console.log(clickCount);
// if (clickCount >= 2) {
//    Materialize.toast("You have found one of the many easter eggs... See if you can find them <span class=\"easter-egg-toast\" onclick=\"document.getElementById('egg-bio-text').style.transform = 'rotate(180deg)';console.log('done');\">&nbsp;all</span>!", 4000);
//  }
//}
