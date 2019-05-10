//get dom reference
var donatebtn = document.querySelectorAll(".donatebtn");
var volunteerbtn = document.querySelectorAll(".vlrbtn");
var top = document.querySelector("#top");

//functions
var donate = function() {
  window.location.href = "https://paystack.com/pay/tideydonation";
};
var volunteer = function() {
  window.location.href =
    "https://docs.google.com/forms/d/e/1FAIpQLSfa8B65cx9qOF58PEzww5vFvVvrTvm5d475njVarSfZ62L8VQ/viewform?vc=0&c=0&w=1";
};

//Event listeners
donatebtn.forEach(function(btn, index) {
  btn.addEventListener("click", donate);
});

volunteerbtn.forEach(function(btn, index) {
  btn.addEventListener("click", volunteer);
});

//Other scroll functions
var scrolltop = function() {
  window.scrollBy(0, -10000);
};
var scrolltobutt = function() {
  window.scrollBy(0, 10000);
};

var scrolltoabout = function() {
  window.scrollBy(0, 1700);
};
var scrolltoaboutres = function() {
  window.scrollBy(0, 890);
};
//ANIMATIONS
//get all element reference
var second = document.querySelector("#theproblem");
var third = document.querySelector("#secondsection");
var fourth = document.querySelector("#fifthsection");
var fifth = document.querySelector("#sixthsection");
var sixth = document.querySelector("#fourthsection");
var seventh = document.querySelector("#footer");

//define function
var fadeinonscroll = function() {
  console.log(window.pageYOffset + "px");
};
document.addEventListener("scroll", fadeinonscroll);
