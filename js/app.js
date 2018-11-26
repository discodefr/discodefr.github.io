// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}

var status = "less";

function readMore()
{

    if (status == "less") {
        document.getElementById("more").display = "inline";
        document.getElementById("readMoreBtn").innerText = "Moins...";
        status = "more";
    } else if (status == "more") {
        document.getElementById("more").display = "none";
        document.getElementById("readMoreBtn").innerText = "Plus...";
        status = "less"
    }
}