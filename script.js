console.log("The javascript is linked!");

//when the document is loaded then load functions
$(document).ready(function(){

  //apply smooth scrolling to a href links
  $("a").on('click', function(event) {
    
    //apply a value to this.hash
    if (this.hash !=="") {
      //prevent default anchor click behavior
      event.preventDefault();

      //store hash
      var hash = this.hash;
      var offset = $(hash).offset().top - 100;
      //apply animate() method for smooth scrolling
      //apply (800) milliseconds to determine speed of scrolling
      $('html, body').animate({
        scrollTop: offset
      }, 800, function(){
        console.log("Scrolling Smooth!");
      });
    } //end of if statement
  });

  //apply on click to .add to cart input
  $('.addToCart').on('click', () => {
    console.log("Updating the Cart!");
    var cartUpdate = $('#updateCart');
    //update the text of the update cart
    var cartCount = parseInt(cartUpdate.text());
    //if the cart has a value of 0 apply display: flex;
    if(cartCount == 0) cartUpdate.css("display", "flex");
    //increment the cart by 1 value
    cartUpdate.text(++cartCount);
  });

  //email validation function
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    //declare subscribe input as the emal
    var email = $("#subscribeInput").val();
  
    //if email is valid or invalid display an alert
    if (validateEmail(email)) {
      alert("Thanks for subscribing!");
    } else {
      alert("Please enter a valid email.");
    }
    return false;
  }
  
  //on click submit the email for validation
  $("#contactSubmitButton").bind("click", validate);
});


