let productData; 

  // Fetch product data from API
  fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    .then(response => response.json())
    .then(apiData => {
      console.log('API Data:', apiData);
      productData = apiData;
      renderProducts('Men', productData.categories); 
    })
    .catch(error => console.error('Error fetching data:', error));

  function renderProducts(category, productData) {
    console.log(`Rendering ${category} products`);
    const productsContainer = document.getElementById(`${category.toLowerCase()}Products`);
    productsContainer.innerHTML = '';

    const categoryData = productData.find(cat => cat.category_name.toLowerCase() === category.toLowerCase());

    if (categoryData) {
      categoryData.category_products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card-container');

        productCard.innerHTML = `
          <div class="card">
            <div class="card-badge">${product.badge_text}</div>
            <div class="card-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="card-title">
                <div class="title">${product.title}</div>
                <ul class="vendor"><li class="vendor-list">${product.vendor}</li></ul>
            </div>
            <div class="card-price">
                    <div class="price">Rs. ${product.price}</div>
                    <div class="discount-price">$${product.compare_at_price}</div>
                    <div class="discount-percent">
                    ${calculateDiscount(parseInt(product.price), parseInt(product.compare_at_price))}%
                    </div>
                </div>
            <button class="add-to-cart">Add to Cart</button>
          </div>
        `;

        productsContainer.appendChild(productCard);
      });
    } else {
      console.error(`Category data not found for ${category}`);
    }
  }

  function calculateDiscount(price, compareAtPrice) {
    const discount = ((compareAtPrice - price) / compareAtPrice) * 100;
    return discount.toFixed(2);
  }

  function showProducts(category) {
    // Hide all product cards
    document.querySelectorAll('.product-card').forEach(card => {
      card.style.display = 'none';
    });

    // Show the selected category's product cards
    document.getElementById(`${category.toLowerCase()}Products`).style.display = 'flex';

    document.getElementById(`${category.toLowerCase()}Tab`).classList.add('selected');

    // Render products for the selected category
    renderProducts(category, productData.categories);
  }

  