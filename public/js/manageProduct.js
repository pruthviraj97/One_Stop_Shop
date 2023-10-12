// /* Set values + misc */
// var promoCode;
// var promoPrice;
// var fadeTime = 300;

// /* Assign actions */
// $('.quantity input').change(function() {
//   updateQuantity(this);
// });

// $('.remove button').click(function() {
//   removeItem(this);
// });

// $(document).ready(function() {
//   updateSumItems();
// });

// $('.promo-code-cta').click(function() {

//   promoCode = $('#promo-code').val();

//   if (promoCode == '10off' || promoCode == '10OFF') {
//     //If promoPrice has no value, set it as 10 for the 10OFF promocode
//     if (!promoPrice) {
//       promoPrice = 10;
//     } else if (promoCode) {
//       promoPrice = promoPrice * 1;
//     }
//   } else if (promoCode != '') {
//     alert("Invalid Promo Code");
//     promoPrice = 0;
//   }
//   //If there is a promoPrice that has been set (it means there is a valid promoCode input) show promo
//   if (promoPrice) {
//     $('.summary-promo').removeClass('hide');
//     $('.promo-value').text(promoPrice.toFixed(2));
//     recalculateCart(true);
//   }
// });

// /* Recalculate cart */
// function recalculateCart(onlyTotal) {
//   var subtotal = 0;

//   /* Sum up row totals */
//   $('.basket-product').each(function() {
//     subtotal += parseFloat($(this).children('.subtotal').text());
//   });

//   /* Calculate totals */
//   var total = subtotal;

//   //If there is a valid promoCode, and subtotal < 10 subtract from total
//   var promoPrice = parseFloat($('.promo-value').text());
//   if (promoPrice) {
//     if (subtotal >= 10) {
//       total -= promoPrice;
//     } else {
//       alert('Order must be more than £10 for Promo code to apply.');
//       $('.summary-promo').addClass('hide');
//     }
//   }

//   /*If switch for update only total, update only total display*/
//   if (onlyTotal) {
//     /* Update total display */
//     $('.total-value').fadeOut(fadeTime, function() {
//       $('#basket-total').html(total.toFixed(2));
//       $('.total-value').fadeIn(fadeTime);
//     });
//   } else {
//     /* Update summary display. */
//     $('.final-value').fadeOut(fadeTime, function() {
//       $('#basket-subtotal').html(subtotal.toFixed(2));
//       $('#basket-total').html(total.toFixed(2));
//       if (total == 0) {
//         $('.checkout-cta').fadeOut(fadeTime);
//       } else {
//         $('.checkout-cta').fadeIn(fadeTime);
//       }
//       $('.final-value').fadeIn(fadeTime);
//     });
//   }
// }

// /* Update quantity */
// function updateQuantity(quantityInput) {
//   /* Calculate line price */
//   var productRow = $(quantityInput).parent().parent();
//   var price = parseFloat(productRow.children('.price').text());
//   var quantity = $(quantityInput).val();
//   var linePrice = price * quantity;

//   /* Update line price display and recalc cart totals */
//   productRow.children('.subtotal').each(function() {
//     $(this).fadeOut(fadeTime, function() {
//       $(this).text(linePrice.toFixed(2));
//       recalculateCart();
//       $(this).fadeIn(fadeTime);
//     });
//   });

//   productRow.find('.item-quantity').text(quantity);
//   updateSumItems();
// }

// function updateSumItems() {
//   var sumItems = 0;
//   $('.quantity input').each(function() {
//     sumItems += parseInt($(this).val());
//   });
//   $('.total-items').text(sumItems);
// }

// /* Remove item from cart */
// function removeItem(removeButton) {
//   /* Remove row from DOM and recalc cart total */
//   var productRow = $(removeButton).parent().parent();
//   productRow.slideUp(fadeTime, function() {
//     productRow.remove();
//     recalculateCart();
//     updateSumItems();
//   });
// }

window.onload = function () {
    const options = {
      method: "GET"
    
    };
    fetch("http://localhost:5001/getUserCart", options)
      .then(function (response) {
        console.log(response);
  
        response.json().then(function (value) {
        
          console.log(value);
  
          var  cart = value;
          renderCartItems(cart);
          // div = document.getElementById("cart-items")
          // cart.map((product) => {
  
          //   basketdiv = document.createElement("div");
          //   basketdiv.className = "basket-product";
  
          //   itemDiv = document.createElement("div");
          //   itemDiv.className = "item"
  
          //   imageDiv = document.createElement("div");
          //   imageDiv.className = "product-image";
  
          //   imageEle = document.createElement("img")
          //   imageEle.src = product.productDetails.image[0];
  
          //   imageDiv.appendChild(imageEle);
            
  
          //   productDet = document.createElement("div");
          //   productDet.className = "product-details";
  
          //   headerDiv = document.createElement("h1");
          //   headerDiv.innerHTML = product.productDetails.name;
  
          //   productDet.appendChild(headerDiv);
          //   itemDiv.appendChild(imageDiv);
          //   itemDiv.appendChild(productDet);
  
          //   priceDiv = document.createElement("div");
          //   priceDiv.className = "price";
          //   priceDiv.innerHTML = product.productDetails.discountedPrice;
  
          //   quantityDiv = document.createElement("div");
          //   quantityDiv.className = "quantity";
  
          //   inputDiv = document.createElement("input");
          //   inputDiv.className = "quantity-field";
          //   inputDiv.type = "number";
          //   inputDiv.value = product.quantity;
  
          //   quantityDiv.appendChild(inputDiv);
  
          //   subTot = document.createElement("div");
          //   subTot.className = "subtotal"
          //   subTot.innerHTML = "500"
  
          //   hiddendiv = document.createElement("div");
          //   hiddendiv.style.visibility = 'hidden';
          //   hiddendiv.innerHTML = product.productDetails.id;
  
  
          //   removeDiv = document.createElement("div");
          //   removeDiv.className = "remove";
          //   // removeDiv.value = product.productDetails.id;
          //   //removeDiv.onclick = `removeProductFromCart(${product.productDetails.id})`;
  
          //   removeBut = document.createElement("button");
          //   removeBut.type = "button";
          //   removeBut.innerHTML = "Remove";
  
          //   removeBut.addEventListener("click", removeProductFromCart(product.productDetails.id));
          //   // removeBut.onclick  = `removeProductFromCart(${product.productDetails.id})`;
  
          //   removeDiv.appendChild(removeBut);
  
          //   basketdiv.appendChild(itemDiv);
            
          //   basketdiv.appendChild(priceDiv);
          //   basketdiv.appendChild(quantityDiv);
          //   basketdiv.appendChild(subTot);
          //   basketdiv.appendChild(hiddendiv);
          //   basketdiv.appendChild(removeDiv);
  
          //   div.appendChild(basketdiv);
  
          // })
  
          
  
  
          
            
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  
  };
  
  async function removeProductFromCart(productID) {
    console.log(productID);
  
    
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          productId: productID,
        }),
      };
      fetch("/removeProduct", options)
        .then(function (response) {
          console.log(response);
  
          response.json().then(function (value) {
            
            console.log(value);
            window.location.reload();
          });
        });
  
  
  }
  
  async function updateProductFromCart(ele,productID) {
    console.log(productID);
    console.log(ele.value);
    if(ele.value >0){
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          productId: productID,
          quantity: ele.value
        }),
      };
      fetch("/updateProductQuantity", options)
        .then(function (response) {
          console.log(response);
  
          response.json().then(function (value) {
            
            console.log(value);
            window.location.reload();
          });
        });
  
    }
    else{
      removeProductFromCart(productID);
    }
      
  }
  
  
  function renderCartItems(cart) {
    div = document.getElementById("cart-items")
          cart.map((product) => {
  
            basketdiv = document.createElement("div");
            basketdiv.className = "basket-product";
  
            itemDiv = document.createElement("div");
            itemDiv.className = "item"
  
            imageDiv = document.createElement("div");
            imageDiv.className = "product-image";
  
            imageEle = document.createElement("img")
            imageEle.src = product.productDetails.image[0];
  
            imageDiv.appendChild(imageEle);
            
  
            productDet = document.createElement("div");
            productDet.className = "product-details";
  
            headerDiv = document.createElement("h1");
            headerDiv.innerHTML = product.productDetails.name;
  
            productDet.appendChild(headerDiv);
            itemDiv.appendChild(imageDiv);
            itemDiv.appendChild(productDet);
  
            priceDiv = document.createElement("div");
            priceDiv.className = "price";
            priceDiv.innerHTML = product.productDetails.retailPrice;
  
            quantityDiv = document.createElement("div");
            quantityDiv.className = "quantity";
  
            inputDiv = document.createElement("input");
            inputDiv.className = "quantity-field";
            inputDiv.type = "number";
            inputDiv.addEventListener("click", function(){updateProductFromCart(this,product.productDetails.id)});
            inputDiv.value = product.quantity;
  
            quantityDiv.appendChild(inputDiv);
  
            subTot = document.createElement("div");
            subTot.className = "subtotal"
            subTot.innerHTML = "500"
  
            hiddendiv = document.createElement("div");
            hiddendiv.style.visibility = 'hidden';
            hiddendiv.innerHTML = product.productDetails.id;
  
  
            removeDiv = document.createElement("div");
            removeDiv.className = "remove";
            // removeDiv.value = product.productDetails.id;
            //removeDiv.onclick = `removeProductFromCart(${product.productDetails.id})`;
  
            removeBut = document.createElement("button");
            removeBut.type = "button";
            removeBut.innerHTML = "Remove";
  
            removeBut.addEventListener("click", function(){removeProductFromCart(product.productDetails.id)});
            // removeBut.onclick  = `removeProductFromCart(${product.productDetails.id})`;
  
            removeDiv.appendChild(removeBut);
  
            basketdiv.appendChild(itemDiv);
            
            basketdiv.appendChild(priceDiv);
            basketdiv.appendChild(quantityDiv);
            basketdiv.appendChild(subTot);
            basketdiv.appendChild(hiddendiv);
            basketdiv.appendChild(removeDiv);
  
            div.appendChild(basketdiv);
          })
  }
  