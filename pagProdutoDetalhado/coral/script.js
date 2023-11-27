function addToCart(productName, price, imageUrl) {
    // Recupera o carrinho do localStorage ou inicializa um array vazio
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verifica se o produto já está no carrinho
    const existingProductIndex = cart.findIndex(item => item.productName === productName);

    if (existingProductIndex !== -1) {
        // Se o produto já está no carrinho, incrementa a quantidade
        cart[existingProductIndex].quantity++;
    } else {
        // Se o produto não está no carrinho, adiciona ao carrinho
        cart.push({ productName, price, imageUrl, quantity: 1 });
    }

    // Armazena o carrinho atualizado no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCart() {
    // Recupera o carrinho do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Itere sobre cada item no carrinho e gere um elemento HTML
    let cartItemsHtml = '';
    cart.forEach(item => {
        cartItemsHtml += `
            <div class="cart-item">
                <img src="${item.imageUrl}" alt="${item.productName}" />
                <div class="item-info">
                    <h3>${item.productName}</h3>
                    <p>Quantidade: ${item.quantity}</p>
                    <p>Preço: $${item.price.toFixed(2)}</p>
                </div>
            </div>
        `;
    });

    // Atualiza o elemento do carrinho no DOM
    document.getElementById('cart-items').innerHTML = cartItemsHtml;
}