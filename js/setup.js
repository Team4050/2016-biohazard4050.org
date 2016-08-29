window.onload = function () {
  $('body').addClass('loaded', function () {
    //this happens after the preloader goes bye bye

  });
  $('.collapsible').collapsible({
    accordion: true
  });
  NProgress.done();
  $('.modal-trigger').leanModal();

};
