let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.productName}" width="50">
            ${item.productName} - R$ ${item.price.toFixed(2)} - Quantidade: ${item.quantity}
            <button onclick="removeFromCart('${item.productName}')">Remover</button>
            <button onclick="increaseQuantity('${item.productName}')">Adicionar mais um</button>
            <button onclick="decreaseQuantity('${item.productName}')">Diminuir um</button>
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

updateCart();
