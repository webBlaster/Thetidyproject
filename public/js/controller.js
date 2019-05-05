//get dom reference
var donatebtn = document.querySelectorAll(".donatebtn");
var volunteerbtn = document.querySelectorAll(".vlrbtn");

//functions
var donate = function() {
  window.location.href = "https://paystack.com/pay/tideydonation";
};
var volunteer = function() {
  window.location.href =
    "https://docs.google.com/forms/d/e/1FAIpQLSfa8B65cx9qOF58PEzww5vFvVvrTvm5d475njVarSfZ62L8VQ/viewform?vc=0&c=0&w=1";
};

console.log(donatebtn, volunteerbtn);
//Event listeners
donatebtn.forEach(function(btn, index) {
  btn.addEventListener("click", donate);
});

volunteerbtn.forEach(function(btn, index) {
  btn.addEventListener("click", volunteer);
});
