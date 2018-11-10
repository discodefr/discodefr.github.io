// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

$(document).ready(function(){
    (function() {
      function checkRecaptcha() {
        res = $('#g-recaptcha-response').val();

        if (res == "" || res == undefined || res.length == 0) // Si l'user n'a pas coché
          return false;
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