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
  //remove items from cart
  const removeCartItem = (e) => {
    let buttonClicked = e.target;
    let newRow = buttonClicked.parentNode.parentNode.getAttribute("row-number");
    document.querySelector(`#$(newRow)`).remove();
    let numItemsAdded = document.querySelector("tbody").childElementCount;
    if (childElementCount == 0) {
      toggleShoppingControls(false);
    } else {
      //updateCartTotal()
    } 
  }
  //add a new item to cart by clicking a cart button
  const addToCartClicked = () => {
    let buttonClicked = e.target;
    let shopItem = buttonClicked.parentNode.parentNode.parentNode;
    let productId= shopItem.getAttribute("product-id");
    let title= shopItem.firstElementChild.getAttribute("alt");
    let productName= shopItem.lastElementChild.firstElementChild.textContent;
    let price= shopItem.children[1].firstElementChild.innerText.replace("€/Kg","");
    let imageSrc= shopItem.firstElementChild.src;
    addItemToCart(productId, title, productName, price, imageSrc);
    //updateCartTotal();
  }
});
