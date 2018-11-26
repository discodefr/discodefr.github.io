// Made by Dem0niaX & Paulé

$('.fadeIn').addClass('animated fadeIn');

function recaptcha_callback() {
  $('#submitbtn').removeAttr('disabled');
}

function readMore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (!moreText.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Moins..."; 
    moreText.style.display = "inline";
  }
}