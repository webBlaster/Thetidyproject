//get dom reference
var donatebtn = document.querySelector(".donatebtn");
var volunteerbtn = document.querySelector(".vlrbtn");

//functions
var donate = function() {
  window.location.href = "https://paystack.com/pay/tideydonation";
};

var volunteer = function() {
  window.location.href =
    "https://docs.google.com/forms/d/e/1FAIpQLSfa8B65cx9qOF58PEzww5vFvVvrTvm5d475njVarSfZ62L8VQ/viewform?vc=0&c=0&w=1";
};

donatebtn.addEventListener("click", donate);
volunteerbtn.addEventListener("click", volunteer);
