// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}

var t = document.getElementsByClassName('t')
$(function () {
    $(t).slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(`${t}:hidden`).slice(0, 3).slideDown();
        if ($(`${t}:hidden`).length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 4000);
    });
});