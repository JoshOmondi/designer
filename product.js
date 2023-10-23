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
  productBtn.textContent = "Buy Now"

} else {
  // Handle the case where there are no product details in local storage
  console.log("Product details not found in local storage.");
}
