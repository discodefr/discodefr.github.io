// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#sell_house_submit').removeAttr('disabled');
}

var submitbtn = document.getElementById("sell_house_submit")
submitbtn.onclick = window.location.href("contactposted.html")