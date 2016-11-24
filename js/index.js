function init() {
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

  makeLines();
}

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-37159206-5', 'auto');
ga('send', 'pageview');

init();