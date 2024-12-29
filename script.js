const cart = [];
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        cart.push({ name, price });
        updateCart();
      });
    });

    function updateCart() {
      const cartItems = document.querySelector('.cart-items');
      const cartTotal = document.querySelector('.cart-total');
      cartItems.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
      });
      cartTotal.textContent = total.toFixed(2);
    }
    