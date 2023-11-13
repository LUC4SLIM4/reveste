function addToCartAndNavigate(productName, price, imageUrl) {
    addToCart(productName, price, imageUrl);
    updateCart();
    navigateToCartPage();
}

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

function navigateToCartPage() {
    // Redireciona para a página carrinho.html
    window.location.href = 'carrinho.html';
}


