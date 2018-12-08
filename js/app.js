// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}

var t = document.getElementsByClassName('t');
var ldb = document.getElementById('loadMore');
var nts = document.getElementById("NothingToShow");
$(function () {
    $(t).slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(`.t:hidden`).slice(0, 3).slideDown();
        if ($(`.t:hidden`).length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 4000);
    });
});

var formcheckbox = document.getElementById("replytocheckbox");
var checkboxpoint = document.getElementById("checkboxpoint")
var checkedValue = $('#replytocheckbox:checked').val();

$(function() {
    if(formcheckbox.checked == true) {
        checkboxpoint.val("true")
    } else {
        checkboxpoint.val("false")
    }
})