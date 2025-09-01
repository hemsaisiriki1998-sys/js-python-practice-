<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Saree Sale Website</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; margin: 0; }
    header { background: #a12722; color: #fff; padding: 16px; text-align: center; }
    .container { max-width: 900px; margin: 24px auto; padding: 0 16px; }
    .products { display: flex; flex-wrap: wrap; gap: 16px; }
    .product { border: 1px solid #ddd; border-radius: 8px; padding: 16px; width: 220px; background: #fff; }
    .product img { max-width: 100%; height: 140px; object-fit: cover; }
    .product h3 { margin: 10px 0 4px; }
    .product p { margin: 4px 0; }
    .product button { background: #a12722; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }
    #cart { position: fixed; right: 16px; top: 80px; background: #f7f7f7; border: 1px solid #ddd; padding: 16px; min-width: 200px; border-radius: 8px; }
    #cart h4 { margin: 0 0 8px; }
    #cart ul { list-style: none; padding: 0; margin: 0 0 8px; }
    #cart ul li { margin-bottom: 4px; }
    #cart .total { font-weight: bold; }
  </style>
</head>
<body>
  <header>
    <h1>Beautiful Saree Sale</h1>
    <p>Find your perfect saree!</p>
  </header>
  <div class="container">
    <div class="products" id="products"></div>
  </div>
  <div id="cart">
    <h4>Your Cart</h4>
    <ul id="cart-items"></ul>
    <div class="total" id="cart-total"></div>
  </div>
  <script>
    // Sample saree products
    const sarees = [
      {
        id: 1,
        name: "Banarasi Silk Saree",
        price: 2200,
        img: "https://images.unsplash.com/photo-1542068829-1115f7259450?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 2,
        name: "Kanchipuram Saree",
        price: 3500,
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 3,
        name: "Cotton Printed Saree",
        price: 950,
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 4,
        name: "Chiffon Party Saree",
        price: 1800,
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
      }
    ];

    const productsDiv = document.getElementById('products');
    const cartItemsUl = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    let cart = [];

    // Render products
    sarees.forEach(saree => {
      const product = document.createElement('div');
      product.className = 'product';
      product.innerHTML = `
        <img src="${saree.img}" alt="${saree.name}">
        <h3>${saree.name}</h3>
        <p>₹${saree.price}</p>
        <button onclick="addToCart(${saree.id})">Add to Cart</button>
      `;
      productsDiv.appendChild(product);
    });

    // Add to cart function
    window.addToCart = function(id) {
      const saree = sarees.find(s => s.id === id);
      const item = cart.find(i => i.id === id);
      if (item) {
        item.qty += 1;
      } else {
        cart.push({ ...saree, qty: 1 });
      }
      renderCart();
    };

    // Render cart
    function renderCart() {
      cartItemsUl.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.qty} – ₹${item.price * item.qty}`;
        cartItemsUl.appendChild(li);
      });
      cartTotalDiv.textContent = 'Total: ₹' + total;
    }

    renderCart();
  </script>
</body>
</html>
