console.log("The javascript is linked!");

//*******need to retype all of this code below */
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var offset =  $(hash).offset().top - 100;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: offset
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
        console.log("Firing the function!");
      });
    } // End if
  });

  $('.addToCart').on('click', () => {
    console.log("Updating the Cart!");
    var cartUpdate = $('#updateCart');
    var cartCount = parseInt(cartUpdate.text());
    if(cartCount == 0) cartUpdate.css("display", "flex");
    cartUpdate.text(++cartCount);
  });

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    var email = $("#subscribeInput").val();
  
    if (validateEmail(email)) {
      alert("Thanks for subscribing!");
    } else {
      alert("Please enter a valid email.");
    }
    return false;
  }
  
  $("#contactSubmitButton").bind("click", validate);
});


