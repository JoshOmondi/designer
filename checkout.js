document.addEventListener("DOMContentLoaded", function () {
  // Retrieve product details from local storage
  const productDetailsJSON = localStorage.getItem("productDetails");

  if (!productDetailsJSON) {
    // Handle the case where no product details are found
    document.getElementById("product-details-container").innerHTML =
      "<p>No products in the cart.</p>";
    return;
  }

  // Parse the JSON data
  const productDetails = JSON.parse(productDetailsJSON);

  // Create a HTML representation of product details
  const productDetailsContainer = document.getElementById(
    "product-details-container"
  );

  // Loop through the product details and display them
  productDetails.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
            <h3>Product ${index + 1}</h3>
            <p>Name: ${product.name}</p>
            <p>Price: $${product.price}</p>
            <p>Description: ${product.description}</p>
            <hr>
        `;
    productDetailsContainer.appendChild(productDiv);
  });
});
