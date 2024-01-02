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
    emptyCart();
  });

  //simulating payment confirmation
  document.querySelector("#btn-purchase").addEventListener("click",() => {
    //purchaseClicked();
  });
  //stop pulsing effect on shopping cart
  document.querySelector("#cart").addEventListener("click",()=> {
    cart.classList.remove("hvr-pulse");
  });
  //activate/deactivate cart buttons 
  const toggleShoppingControls = (enable) => {
    if (enable) {
      document.querySelector("#empty-cart").classList.remove("disabled");
      document.querySelector("#btn-purchase").classList.remove("disabled");
      document.querySelector("#empty-cart").classList.add("hvr-pulse");


    }else {
      document.querySelector("#empty-cart").classList.add("disabled");
      document.querySelector("#empty-cart").classList.add("disabled");
      document.querySelector("#empty-cart").classList.remove("hvr-pulse");

    }
  }
  // emptyCart function 
  const emptyCart = () => {
    document.querySelector("tbody").innerHTML= "";
    //updateCartTotal()
    toggleShoppingControls(false);
  }
 
   //simulating purchase and show alerts
   const purchaseClicked = () => {
    document.querySelector("tbody").innerHTML = "";
    //updateCartTotal()
    toggleShoppingControls(false);
    cartPurchased.show();
    setTimeout(() => {
      cartPurchased.hide();
    }, 2000);

  }
});
