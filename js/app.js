// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}


var h = $('homenews')[0].scrollHeight;

$('#more').click(function(e) {
    e.stopPropagation();
    $('homenews').animate({
        'height': h
    })
});

$(document).click(function() {
    $('homenews').animate({
        'height': '50px'
    })
})