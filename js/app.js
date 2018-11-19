// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function disableAllButtons(form) {
  var buttons = form.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

$(document).ready(function(){
    (function() {
      function checkRecaptcha() {
        res = $('#g-recaptcha-response').val();

        if (res == "" || res == undefined || res.length == 0)
          return false;
        else
          return true;
      }


      $('form').submit(function(e) {
        if(!checkRecaptcha()) {
            $( '.msg-error').text( "Merci de cocher le reCAPTCHA." )
            disableAllButtons(form)
          return false;
        }
      });
    }());
});