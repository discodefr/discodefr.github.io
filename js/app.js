// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}

/* attach a submit handler to the form */
$("#ctcform").submit(function(event) {

/* stop form from submitting normally */
event.preventDefault();
/* get the action attribute from the <form action=""> element */
var $form = $( this ),
url = $form.attr( 'action' );

/* Send the data using post with element id name and name2*/
var posting = $.post( url, { nom: $('#nom').val(), prenom: $('#prenom').val(), discordtag: $("#discordtag").val(), email: $("#email").val(), message: $("#message").val() } );

/* Alerts the results */
posting.done(function( data ) {
alert('success');
});
});