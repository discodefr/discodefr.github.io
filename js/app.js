// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}

var status = "less";

function readMore()
{
    var text="Here is some text that I want added to the HTML file";

    if (status == "less") {
        document.getElementById("more").innerHTML=text;
        document.getElementById("readMoreBtn").innerText = "Moins...";
        status = "more";
    } else if (status == "more") {
        document.getElementById("more").innerHTML = "";
        document.getElementById("toggleButton").innerText = "Plus...";
        status = "less"
    }
}