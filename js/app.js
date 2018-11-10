// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

$(document).ready(function(){
    (function() {
      function checkRecaptcha() {
        res = $('#g-recaptcha-response').val();

        if (res == "" || res == undefined || res.length == 0)
          return false, 
          $( '.msg-error').text( "Merci de remplir le reCAPTCHA.");

        else
          return true;
      }


      $('form').submit(function(e) {
        if(!checkRecaptcha()) {
          return false;
        }
      });
    }());
});