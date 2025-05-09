function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("active");
  document.body.style.overflow = "auto";
}

function addToCart() {
  // Get the quantity
  const quantity = document.querySelector(".quantity-input").value;

  // Update cart quantity display
  const cartCountElements = document.querySelectorAll(".cart-count");
  cartCountElements.forEach((element) => {
    element.textContent = quantity;
  });

  // Update cart item quantity
  document.querySelector(".cart-quantity-input").value = quantity;

  // Calculate and update total
  const price = 249;
  const total = price * parseInt(quantity);
  const formattedTotal = `$${total}<sup>00</sup>`;

  document.querySelector(".cart-item-total").innerHTML = formattedTotal;
  document.querySelector(
    ".cart-total span:last-child"
  ).innerHTML = `${formattedTotal} USD`;

  // Open the cart
  openCart();
}

// Add event listeners for quantity buttons on product page
const quantityBtns = document.querySelectorAll(".quantity-btn");
const quantityInput = document.querySelector(".quantity-input");

quantityBtns[0].addEventListener("click", function () {
  let value = parseInt(quantityInput.value);
  if (value > 1) {
    quantityInput.value = value - 1;
  }
});

quantityBtns[1].addEventListener("click", function () {
  let value = parseInt(quantityInput.value);
  quantityInput.value = value + 1;
});

// Add event listeners for quantity buttons in cart
const cartQuantityBtns = document.querySelectorAll(".cart-quantity-btn");
const cartQuantityInput = document.querySelector(".cart-quantity-input");

cartQuantityBtns[0].addEventListener("click", function () {
  let value = parseInt(cartQuantityInput.value);
  if (value > 1) {
    cartQuantityInput.value = value - 1;
    updateCartTotal();
  }
});

cartQuantityBtns[1].addEventListener("click", function () {
  let value = parseInt(cartQuantityInput.value);
  cartQuantityInput.value = value + 1;
  updateCartTotal();
});

function updateCartTotal() {
  const quantity = parseInt(
    document.querySelector(".cart-quantity-input").value
  );
  const price = 249;
  const total = price * quantity;
  const formattedTotal = `$${total}<sup>00</sup>`;

  document.querySelector(".cart-item-total").innerHTML = formattedTotal;
  document.querySelector(
    ".cart-total span:last-child"
  ).innerHTML = `${formattedTotal} USD`;

  // Update cart count
  const cartCountElements = document.querySelectorAll(".cart-count");
  cartCountElements.forEach((element) => {
    element.textContent = quantity;
  });
}

// Remove item functionality
document.querySelector(".remove-item").addEventListener("click", function () {
  this.closest(".cart-item").remove();
  document.querySelector(".cart-total span:last-child").innerHTML =
    "$0<sup>00</sup> USD";

  // Update cart count
  const cartCountElements = document.querySelectorAll(".cart-count");
  cartCountElements.forEach((element) => {
    element.textContent = "0";
  });
});
