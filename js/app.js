window.addEventListener("load", () => {
  let addedToCart = new bootstrap.Modal(
    document.querySelector("#addedToCart"),
    {
      keyboard: false,
    }
  );
  let cartPurchased = new bootstrap.Modal(
    document.querySelector("#cartPurchased"),
    {
      keyboard: false,
    }
  );
  let alreadyAddedToCart = new bootstrap.Modal(
    document.querySelector("#alreadyAddedToCart"),
    {
      keyboard: false,
    }
  );

  let addToCartButtons = document.querySelectorAll(".card-body");
  for (let index = 0; index < addToCartButtons.length; index++) {
    let button = addToCartButtons[index];
    button.addEventListener("click", (e) => {
      //addToCartClicked(e)
    });
  }
  //emptying cart
  document.querySelector("#empty-cart").addEventListener("click",() => {
    //emptyCart();
  });

  //simulating payment confirmation
  document.querySelector("#btn-purchase").addEventListener("click",() => {
    //purchaseClicked();
  });
  //stop pulsing effect on shopping cart
  document.querySelector("#cart").addEventListener("click",()=> {
    cart.classList.remove("hvr-pulse");
  });

  

  
});
