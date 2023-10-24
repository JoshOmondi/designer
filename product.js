// Declare the cart array as a global variable
const cart = [];

// Function to update the cart count
const updateCartCount = () => {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
};

// Retrieve the product details from local storage
const productDetailsJSON = localStorage.getItem("productDetails");

if (productDetailsJSON) {
  const productDetails = JSON.parse(productDetailsJSON);

  // Populate the HTML elements with the product details
  const productTitle = document.getElementById("product-title");
  const productImage = document.getElementById("product-image");
  const productPrice = document.getElementById("product-price");
  const productDescription = document.getElementById("product-description");
  const productBtn = document.getElementById("productBtn");

  productTitle.textContent = productDetails.title;
  productImage.src = productDetails.image;
  productPrice.textContent = `$${productDetails.price}`;
  productDescription.textContent = productDetails.description;
  productBtn.textContent = "Purchase!";

  // Load the cart data from local storage if available
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart.push(...JSON.parse(savedCart));
    updateCartCount(); // Update the cart count from local storage
  }

  // Add a click event listener to the "Purchase" button
  productBtn.addEventListener("click", () => {
    const selectedProduct = {
      title: productDetails.title,
      price: productDetails.price,
      image: productDetails.image,
      description:productDetails.description,
    };

    // Add the selected product to the cart
    cart.push(selectedProduct);

    // Update the cart count directly
    updateCartCount();

    // Store the cart data in local storage for persistence
    localStorage.setItem("cart", JSON.stringify(cart));
  });
} else {
  // Handle the case where there are no product details in local storage
  console.log("Product details not found in local storage.");
}
