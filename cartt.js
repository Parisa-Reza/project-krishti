// console.log("hiiii");

// //cart
// var cartIcon = document.querySelector("#navcart");
// var cart = document.querySelector(".cart");
// var CloseCart = document.querySelector("#close-cart");

// // for open cart
// jQuery(document).ready(function() {
//     jQuery(".cart").addClass("active");
// })
// jQuery("#close-cart").ready(function() {
//     jQuery(".cart").removeClass("active");
// })
// cartIcon.addEventListener("click", function () {
//     jQuery(".cart").addClass("active");
//   });
  
//   CloseCart.addEventListener("click", function () {
//     jQuery(".cart").removeClass("active");
//   });
  

// //cart working

// if (document.readystate == "loading") {
//     document.addEventListener("DOMContentLoaded", ready);
// }
// else {
//     ready();
// }

// //making function

// function ready() {
//     var removeCartButtons = document.getElementsByClassName("cart-remove");
//     console.log(removeCartButtons);

//     for (var i = 0; i < removeCartButtons.length; i++) {
//         var button = removeCartButtons[i];
//         button.addEventListener("click", removeCartItem);
//     }
//     //quantity change
//     var quantityInputs = document.getElementsByClassName("cart-quantity");
//     for (var i = 0; i < quantityInputs.length; i++) {
//         var input = quantityInputs[i];
//         button.addEventListener("click", quantityChanged);
//     }

//     // add to cart
//     var addCart = document.getElementsByClassName("add-cart");
//     for (var i= 0; i < quantityInputs.length; i++) {
//         var button = addCart[i];
//         button.addEventListener("click", addCartClicked);
//     }

//     document
//         .getElementsByClassName("btn-buy")[0]
//         .addEventListener("click", buyButtonClicked);

// }

// //buy button

// function buyButtonClicked(){
//     alert("Your Order is placed");
//     var cartContent = document.getElementsByClassName("cart-content")[0];
//     while (cartContent.hasChildnodes) {
//         cartContent.removeChild(cartContent.firstchild);
//     }
   
//     updatetotal();

// }

// // remove item from cart
// function removeCartItem(event) {
//     var buttonClicked = event.remove();
//     buttonClicked.parentElement.remove();
//     updatetotal();
// }

// //target any r parent elemnet o any 

// //quantity change
// function quantityChanged(event) {
//     var input = event.target;

//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
//     }
//     updatetotal();
// }

// //add to cart

// function addCartClicked(event) {
//     var button = event.target;
//     var shopProducts = buttonParentElement;
//     var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
//     var price = shopProducts.getElementsByClassName("price")[0].innerText;
//     var productImg = shopProducts.getElementsByClassName("product-image")[0].src;
//     addProductToCart(title, price, productImg);
//     updatetotal();

// }

// function addProductToCart(title, price, productImg) {
//     var cartShopBox = document.createElement("div");
//     cartShopBox.classList.add("cart-box");
//     var cartItems = document.getElementsByClassName("cart-content")[0];
//     var cartItemNames = cartItems.getElementsByClassName("cart-product-title");

//     for (var i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText == title) {
//             alert(" You have the product in the cart already. Increase your product quantity");
//             return
//         }

//     }



//     var cartBoxContent = `<img src="${productImg}" class="cart-img">
//         <div class="detail-box">
//             <div class="cart-product-title">${title}</div>
//             <div class="cart-price">${price}</div>
//             <input type="number" value="1" class="cart-quantity">
//         </div>
//         <i class="fa-solid fa-trash cart-remove"></i>`;
// cartShopBox.innerHTML= cartBoxContent;
// cartItems.append(cartShopBox);
// updatetotal();

// cartShopBox
// .getElementsByClassName("cart-remove")[0]
// .addEventListener("click",removeCartItem);

// cartShopBox
// .getElementsByClassName("cart-quantity")[0]
// .addEventListener("change",removeCartItem);

// cartShopBox
// .getElementsByClassName("cart-price")[0]
// .addEventListener("change",removeCartItem);

// }

// // update total

// function updatetotal()
// {

// var cartContent= document.getElementsByClassName("cart-content")[0];
// var cartBoxes= document.getElementsByClassName("cart-box")[0];
// var total=0;
// for( var i=0; i<cartBoxes.length;i++)
// {
//     var cartbox = cartBoxes[i];
//     var priceElement = cartbox.getElementsByClassName("cart-price")[0];
//     var quantityElement = cartbox.getElementsByClassName("cart-quantity")[0];
//     var price = parseFloat(priceElement.innerText.replace ("TK ",""));
//     var quantity=quantityElement.value;
//     total= total+price*quantity;

// }

// //if price contains some poisha
// {
//     total=math.round(total*100)/100;
//     document.getElementsByClassName("total-price")[0].innerText="TK" + total;
// }

// }

// console.log("its working till end");

//bp
console.log("hiiii");

//cart
var cartIcon = document.querySelector("#navcart");
var cart = document.querySelector(".cart");
var CloseCart = document.querySelector("#close-cart");

// for open cart
jQuery(document).ready(function () {
    jQuery(".cart").addClass("active");
})
jQuery("#close-cart").ready(function () {
    jQuery(".cart").removeClass("active");
})

//nb
cartIcon.addEventListener("click", function () {
    jQuery(".cart").addClass("active");
  });
  
  CloseCart.addEventListener("click", function () {
    jQuery(".cart").removeClass("active");
  });
  


//cart working

if (document.readystate == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

//making function

function ready() {
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);

    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    //quantity change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        button.addEventListener("click", quantityChanged);
    }

    // add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }

    document
        .getElementsByClassName("btn-buy")[0]
        .addEventListener("click", buyButtonClicked);

}

//buy button

function buyButtonClicked() {
    alert("Your Order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildnodes) {
        cartContent.removeChild(cartContent.firstchild);
    }
    updatetotal();
}

// remove item from cart
function removeCartItem(event) {
    console.log("remove called--");
    var buttonClicked = event.remove();
    buttonClicked.parentElement.remove();
    updatetotal();
}

//target any r parent elemnet o any 

//quantity change
function quantityChanged(event) {
    var input = event.target;

    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

//add to cart

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-product-title");

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert(" You have the product in the cart already. Increase your product quantity");
            return
        }

    }

    var cartBoxContent = `<img src="${productImg}" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input onchange="quantityChangedEvent()" type="number" value="1" class="cart-quantity">
        </div>
        <i class="fa-solid fa-trash cart-remove"></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    updatetotal();

    // cartShopBox
    //     .getElementsByClassName("cart-remove")[0]
    //     .addEventListener("click", removeCartItem);
    //
    // cartShopBox
    //     .getElementsByClassName("cart-quantity")[0]
    //     .addEventListener("change", removeCartItem);
    //
    // cartShopBox
    //     .getElementsByClassName("cart-price")[0]
    //     .addEventListener("change", removeCartItem);
}

// update total

function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = document.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartbox = cartBoxes[i];
        var priceElement = (cartbox.getElementsByClassName("cart-price")[0]).innerText.replace("TK ", "").replace("Price:", "");
        var quantityElement = cartbox.getElementsByClassName("cart-quantity")[0];
        var price = parseInt(priceElement);
        var quantity = quantityElement.value;
        total = total + (quantity * price);
    }

    //if price contains some poisha
    {
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "TK" + total;
    }
}

console.log("its working till end");

function cartClicked() {
    console.log("cart clicked");
    $(".cart").toggle();
}

$('#close-cart').click(function () {
    $(".cart").toggle();
});

function quantityChangedEvent() {
    updatetotal();
}
$(document).ready(function() {
    $(document).on('click', '.cart-remove', function () {
        $(this).parent('.cart-box').remove();
        updatetotal();
    })
})



