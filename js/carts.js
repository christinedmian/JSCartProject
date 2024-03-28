let productsInCart = localStorage.getItem("productsInCart")
let allproducts = document.querySelector(".products")

if (productsInCart) {
    let item = JSON.parse(productsInCart)
    drawCartProducts(item)
}

function drawCartProducts(products) {
    let y = products.map((item) => {
        return `
        <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
            <h2>"${item.title}"</h2>
            <p>the frisch face product</p>
            <span>color : "${item.color}"</span>
        </div>
        <div class="product_item_action">
            <button class="add_to_cart" onClick="RemoveFromCarts(${item.id})">Remove From Carts</button>
        </div>
    </div>`
    })
    allproducts.innerHTML = y.join(' ');
}

function RemoveFromCarts(id){
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
    console.log("remove")
    let removeItemIndex=productsInCart.findIndex((item)=>item.id===id);
    if (removeItemIndex !== -1) {
        productsInCart.splice(removeItemIndex, 1); // Remove item from array
        localStorage.setItem("productsInCart", JSON.stringify(productsInCart)); // Update localStorage
        console.log("Item removed from cart");
        drawCartProducts(productsInCart); // Redraw the cart items
    } else {
        console.log("Item not found in cart");
    }

}