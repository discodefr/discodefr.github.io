// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}

// AJAX
$( "#fillthesheet" ).submit(function( event ) {
  event.preventDefault();

  var showConfirmation = function (data){
    $('#confirming').fadeIn(320).delay(1800).fadeOut(500);
    console.log(data);
  }


  // Paste the url of your web app scriptUrl from step 2 below

  var scriptUrl = "https://script.google.com/macros/s/AKfycbzUMQdcrJYc-jCLvKKd1h0fS4GOBa3iNtsP9ii3HOyxwA6oR8E/exec";
  scriptUrl += '?' + $.param({
    // Make sure the key: value parameters are in the following order
    // SpreadsheetColumnHeader: input'sValue
    'Test': $('#email').val()
  });

  $.ajax({
      crossDomain: true,
    url: scriptUrl,
    method: "GET",
    dataType: "jsonp",
    success: showConfirmation
  });
});

// End of AJAX