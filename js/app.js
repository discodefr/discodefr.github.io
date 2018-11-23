// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}

$(document).ready(function() {

  // process the form
  $('ctcform').submit(function(event) {

      // get the form data
      // there are many ways to get this data using jQuery (you can use the class or id also)
      var formData = {
          'nom'               : $('input[name=nom]').val(),
          'prenom'            : $('input[name=prenom]').val(),
          'discordtag'        : $('input[name=discordtag]').val(),
          'email'             : $('input[name=email]').val(),
          'message'           : $('input[name=message').val(),
      };

      // process the form
      $.ajax({
          type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
          url         : $("tctform").attr('action'), // the url where we want to POST
          data        : formData, // our data object
          dataType    : 'json', // what type of data do we expect back from the server
                      encode          : true
      })
          // using the done promise callback
          .done(function(data) {

              // log data to the console so we can see
              console.log(data); 

              // here we will handle errors and validation messages
          });

      // stop the form from submitting the normal way and refreshing the page
      event.preventDefault();
  });

});