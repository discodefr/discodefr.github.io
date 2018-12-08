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

$(function() {
    if(formcheckbox.checked == true) {
        checkboxpoint.innerHTML('<input type="checkbox" class="custom-control-input" id="replytocheckbox" value="false" name="replyToRequest?">')
    } else {
        checkboxpoint.innerHTML('<input type="checkbox" class="custom-control-input" id="replytocheckbox" value="true" name="replyToRequest?">')
    }
})