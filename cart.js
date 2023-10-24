document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.getElementById("cart-items");
  const totalItemsSpan = document.getElementById("total-items");
  const totalPriceSpan = document.getElementById("total-price");
  const deleteBtn = document.querySelector(".delete");

  let cart = [];

  // Load the cart from local storage (if available)
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCartDisplay();
  }

  function updateCartDisplay() {
    cartItems.innerHTML = "";
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach((item, index) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.className = "cart-item";

      const itemName = document.createElement("h2");
      itemName.textContent = item.title;

      const img = document.createElement("div");
      img.classList.add("img");
      img.innerHTML = `<img src="${item.image}" width="200px">`;

      const description = document.createElement("p");
      description.classList.add("describe");
      description.textContent = item.description;

      const itemPrice = document.createElement("p");
      itemPrice.textContent = `$${item.price.toFixed(2)}`;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        // Remove the item from the cart
        cart.splice(index, 1);
        updateCartDisplay();
        updateLocalStorage();
      });

      cartItemDiv.appendChild(itemName);
      cartItemDiv.appendChild(img);
      cartItemDiv.appendChild(itemPrice);
      cartItemDiv.appendChild(description);
      cartItemDiv.appendChild(removeButton);
      cartItems.appendChild(cartItemDiv);

      totalItems++;
      totalPrice += item.price;
    });

    totalItemsSpan.textContent = totalItems;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
  }

  function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Add an event listener to the "deleteBtn" to clear the local storage and update the UI
  deleteBtn.addEventListener("click", () => {
    localStorage.clear();
    cart = []; // Clear the cart array
    updateCartDisplay(); // Update the UI to reflect the changes
  });
});
