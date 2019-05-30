var donateform = document.querySelector("#donateform");

var payWithPaystack = function(e) {
  e.preventDefault();
  var email = document.querySelector("#email");
  var amount = document.querySelector("#amount");
  var handler = PaystackPop.setup({
    key: "pk_test_b988702aa8e06f209502e6d13402651ac892046e",
    email: email.value,
    amount: amount.value * 100,
    currency: "NGN",
    ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    metadata: {
      custom_fields: [
        {
          display_name: "Mobile Number",
          variable_name: "mobile_number",
          value: "+2348012345678"
        }
      ]
    },
    callback: function(response) {
      window.location.href = "index.html";
    },
    onClose: function() {
      window.location.href = "index.html";
    }
  });
  handler.openIframe();
  //window.location.href = "index.html";
};
donateform.addEventListener("submit", payWithPaystack);
