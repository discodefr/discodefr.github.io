// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

/*$(document).ready(function(){
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
          return false;
        }
      });
    }());
});*/

$( '#btn-validate' ).click(function(){
    var $captcha = $( '#recaptcha' ),
        response = grecaptcha.getResponse();
    
    if (response.length === 0) {
      $( '.msg-error').text( "reCAPTCHA is mandatory" );
      if( !$captcha.hasClass( "error" ) ){
        $captcha.addClass( "error" );
      }
    } else {
      $( '.msg-error' ).text('');
      $captcha.removeClass( "error" );
      return false;
    }
  })