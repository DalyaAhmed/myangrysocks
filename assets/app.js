
//js to the försatta handla in the mini cart

  // Close the cart drawer when the "Fortsätt handla" button is clicked
  document.getElementById('CartDrawer-ContinueShopping').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent any default behavior (like a page refresh or scroll)
    
    // Find the cart-drawer element and close it
    document.querySelector('cart-drawer').close();
  });
