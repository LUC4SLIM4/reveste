let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="cart-item">
        <button id="clearCartBtn" onclick="clearCart()" style="display: none;"><i class="bi bi-trash"></i> Remover Tudo</button>
        <img src="${item.imageUrl}" alt="${item.productName}" width="190">
        ${item.productName}<br>
        <div class="button-container">
            <button class="b-mais" onclick="increaseQuantity('${item.productName}')"> + </button>
            ${item.quantity}
            <button class="b-menos" onclick="decreaseQuantity('${item.productName}')"> - </button>
            <button class="btn-remove btn-danger remove" onclick="removeFromCart('${item.productName}')"><i class="bi bi-trash"></i></button>
        </div>
        <span style="margin-left: 55px;">R$ ${item.price.toFixed(2)}</span> 
            <div class="row my-4">
        <div class="col-3">
        
        </div>
        <div class="col-6">
       
        </div>
        <div class="col-3">
       
        </div>
    </div>
        `;
        var cart = {
            products: []
        };
        
        window.onload = function() {
            var clearCartBtn = document.getElementById('clearCartBtn');
            clearCartBtn.style.display = 'block';
        }
        
        function addToCart(product) {
            cart.products.push(product);
        }
        
        function clearCart() {
            cart.products = [];
        }

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



updateCart();

// Atribua a função clearCart() ao objeto window para acesso global
window.clearCart = function() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

