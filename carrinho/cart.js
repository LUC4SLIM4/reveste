let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.productName}" width="190">
            ${item.productName} 
            <button class="b-mais" onclick="increaseQuantity('${item.productName}')"> + </button>
             ${item.quantity}
            <button class="b-menos" onclick="decreaseQuantity('${item.productName}')"> - </button>
            <button class="btn btn-danger remove" onclick="removeFromCart('${item.productName}')"><i class="bi bi-trash"></i></button>
            R$ ${item.price.toFixed(2)} 
            <div class="row my-4">
        <div class="col-3">
        
        </div>
        <div class="col-6">
        
        </div>
        <div class="col-3">
        
        </div>
    </div>
        `;
        cartItemsElement.appendChild(li);
    });

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.productName !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function increaseQuantity(productName) {
    const item = cart.find(item => item.productName === productName);
    if (item) {
        item.quantity++;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function decreaseQuantity(productName) {
    const item = cart.find(item => item.productName === productName);
    if (item && item.quantity > 1) {
        item.quantity--;
    } else if (item && item.quantity === 1) {
        removeFromCart(productName);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function checkout() {
    alert('Compra finalizada! Total: R$ ' + cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2));
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function addToCart(productName, price, imageUrl) {
    const item = cart.find(item => item.productName === productName);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ productName, price, quantity: 1, imageUrl });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}



updateCart();