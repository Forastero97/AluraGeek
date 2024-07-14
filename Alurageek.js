document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('add-product-form');
    const productList = document.getElementById('product-list');

    addProductForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('product-name').value;
        const price = document.getElementById('product-price').value;
        const image = document.getElementById('product-image').value;

        addProduct(name, price, image);

        // Limpiar el formulario
        addProductForm.reset();
    });

    function addProduct(name, price, image) {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p>$${price}</p>
        `;

        productList.appendChild(productElement);
    }

    // Productos iniciales (con imágenes de Juego de Tronos, Power Rangers, Pokémon y Naruto)
    const initialProducts = [
        { name: 'Figura de Jon Snow', price: '30.00', image: 'images/Jon Snow.png' },
        { name: 'Figura de Daenerys Targaryen', price: '35.00', image: 'images/Daenerys.png' },
        { name: 'Figura de Power Ranger Rojo', price: '25.00', image: 'images/Power Ranger Rojo.png' },
        { name: 'Pikachu', price: '20.00', image: 'images/Pikachu.png' },
        { name: 'Charizard', price: '40.00', image: 'images/Charizard.png' },
        { name: 'Naruto Uzumaki', price: '30.00', image: 'images/naruto.png' },
        { name: 'Sasuke Uchiha', price: '35.00', image: 'images/Sasuke Uchiha.png' }
    ];

    initialProducts.forEach(product => addProduct(product.name, product.price, product.image));
});
