// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}

function contactredirect() {
var submitbtn = document.getElementById("submitbtn")
submitbtn.onclick = window.location.assign('/contactposted.html');
}