// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

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
            $( '.msg-error').text( "Merci de cocher le reCAPTCHA." ); // si l'utilisateur n'a pas coché
          return false;
        }
      });
    }());
});