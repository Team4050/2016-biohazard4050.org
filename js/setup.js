window.onload = function () {
  $('body').addClass('loaded', function () {
    //Called following pageload
  });
  $('.collapsible').collapsible({
    accordion: true
  });
  $('.modal-trigger').leanModal();

  $('.flexslider').flexslider({
    animation: "swing",
    useCSS: false,
    easing: "easeOutQuad",
    smoothHeight: true,
    controlNav: true,
    slideshowSpeed: 6000,
    directionNav: true,
    animationLoop: true

  });
};
