/*localStorage.setItem("FIRST Car","BMW")
console.log(localStorage.getItem("FIRST Car"))

localStorage.setItem("stud1","christine")

localStorage.removeItem("stud1")

localStorage.clear()*/

//////////////////////////////////////////////////////////////////////////////
let userInfo = document.querySelector("#user_info")

let userData = document.querySelector("#user")

let link = document.querySelector("#link")

if (localStorage.getItem("username")) {
    link.remove();
    userInfo.style.display = "flex"
    userData.innerHTML = localStorage.getItem("username")
}
else {
    userInfo.style.display = "none"
}
let logOutBtn=document.querySelector("#logout")

logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html"
    },1500)
})

////////////////////////////////////////////////////////////////////////

let allproducts = document.querySelector(".products")
let products = [
    {
        id: 1,
        title: "hyper",
        color: "colorfull",
        imageUrl: "images/profile1.webp"
    },
    {
        id: 2,
        title: "Lancer",
        color: "Turquoise",
        imageUrl: "images/5.webp"
    },
    {
        id: 3,
        title: "Hand lotion",
        color: "DarkGreen",
        imageUrl: "images/8.webp"
    },
    {
        id: 4,
        title: "Lancer",
        color: "darkBlue",
        imageUrl: "images/6.jpg"
    },
    {
        id: 5,
        title: "Water",
        color: "sommer Color",
        imageUrl: "images/16.webp"
    },
    {
        id: 6,
        title: "BUBBLE",
        color: "colorfull",
        imageUrl: "images/15.webp"
    },
    {
        id: 7,
        title: "skin care",
        color: "Winter Color",
        imageUrl: "images/11.jpg"
    }
]
function drawItems() {
    let y = products.map((item) => {
        return `<div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
            <h2>"${item.title}"</h2>
            <p>the frisch face products</p>
            <span>color : "${item.color}"</span>
        </div>
        <div class="product_item_action">
            <button class="add_to_cart" onClick="addToCart(${item.id})">add to cart</button>
            <i class="fa-regular fa-heart fav"></i>
        </div>
    </div>`
    })
    allproducts.innerHTML = y.join(' ');

}
drawItems()
let cartProductDiv = document.querySelector(".carts_products div")

let badge = document.querySelector(".badge")

// let addedItem= [];
let addedItem=localStorage.getItem("productsInCart")?JSON.parse(localStorage.getItem("productsInCart")):[];

if(addedItem.length!=0){
    addedItem.map(item=>{
        cartProductDiv.innerHTML+=`<p>${item.title}</p>`
    })
    badge.style.display="block"
    badge.innerHTML = addedItem.length;

}
else{
    badge.style.display="hidden"

}
if (localStorage.getItem = ("username")) {
    function addToCart(id) {
        let choosenItem = products.find((item) => item.id === id);
        cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`
        addedItem=[...addedItem,choosenItem];
        localStorage.setItem("productsInCart",JSON.stringify(addedItem));
        let cartProductsLength = document.querySelectorAll(".carts_products div p");
        badge.style.display = "block";
        badge.innerHTML = cartProductsLength.length;
    }
}
else {
    window.location = "login.html"
}



/////////////////////////////////////////////////////

let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart() {
    if (cartProductDiv.innerHTML != "") {
        if (cartsProducts.style.display == "block") {
            cartsProducts.style.display = "none"
        }
        else {
            cartsProducts.style.display = "block"

        }
    }
}