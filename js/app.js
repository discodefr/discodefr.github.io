// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}

$(function () {
  $("div").slice(0, 3).show();
  $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $("div:hidden").slice(0, 3).slideDown();
      if ($("div:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top
      }, 1500);
  });
});

$('a[href=#top]').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 600);
  return false;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
      $('.totop a').fadeIn();
  } else {
      $('.totop a').fadeOut();
  }
});