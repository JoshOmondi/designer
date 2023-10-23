// Fetch product data
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    const productsDiv = document.querySelector(".product-container");
    const categorySelect = document.getElementById("category");

    // Function to filter and display products based on the selected category
    const displayProductsByCategory = (selectedCategory) => {
      // Clear the existing products in the container
      productsDiv.innerHTML = "";

      // Filter products based on the selected category
      const filteredProducts = products.filter((product) =>
        selectedCategory === "Category"
          ? true
          : product.category === selectedCategory
      );

      // Loop through the filtered products and create HTML elements for each product
      filteredProducts.forEach((product) => {
        // Create an object to hold the product details
        const productDetails = {
          title: product.title,
          description:product.description,
          image: product.image,
          price: product.price,
        };
      

        const productCard = document.createElement("div");
        productCard.className = "product-card";

        const productTitle = document.createElement("h2");
        productTitle.className = "product-title";
        productTitle.textContent = product.title;

        // Create an anchor element to make the image clickable
        const imageLink = document.createElement("a");
        imageLink.href = "product.html";
        imageLink.target = "_blank";

        const img = document.createElement("div");
        img.classList.add("img");
        img.innerHTML = `<img src="${product.image}" width="200px">`;

        // Append the image to the anchor element
        imageLink.appendChild(img);

        const productPrice = document.createElement("p");
        productPrice.className = "product-price";
        productPrice.textContent = `$${product.price}`;

        const buyButton = document.createElement("button");
        buyButton.classList.add("buy-button");
        buyButton.textContent = "Buy Now!";

        // Append elements to the product card
        productCard.appendChild(productTitle);
        productCard.appendChild(imageLink);
        productCard.appendChild(productPrice);
        productCard.appendChild(buyButton);

        // Append the product card to the products container
        productsDiv.appendChild(productCard);

          const productDetailsJSON = JSON.stringify(productDetails);

          // Add a click event listener to the image
          imageLink.addEventListener("click", function (event) {
            // Prevent the default link behavior (to avoid navigating to the URL)
            event.preventDefault();

            // Store the product details in local storage
            localStorage.setItem("productDetails", productDetailsJSON);

            // Optionally, you can navigate to the specified URL if needed
            window.location.href = imageLink.href;
          });
      });
    };
    console.log(products);

    // Event listener for the category select
    categorySelect.addEventListener("change", () => {
      const selectedCategory = categorySelect.value;
      displayProductsByCategory(selectedCategory);
    });

    // Initial display of products (all categories)
    displayProductsByCategory("Category");
  })
  .catch((error) => console.error("Error fetching data:", error));
