// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}

$("#ctcform").submit(function(e) {


  var form = $(this);
  var url = form.attr('action');

  $.ajax({
         type: "POST",
         url: url,
         data: form.serialize(),
         success: function(data)
         {
             alert(data);
         }
       });

  e.preventDefault();
});