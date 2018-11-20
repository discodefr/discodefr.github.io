// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

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
      alert( 'reCAPTCHA marked' );
    }
  })