// ADD TO CART (for features.html products)
document.querySelectorAll(".btn-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
        let card = btn.closest(".product-card");

        let product = {
            name: card.querySelector("h3").innerText,
            desc: card.querySelector("p").innerText,
            price: parseInt(card.querySelector(".price").innerText.replace("Rs. ", "")),
            img: card.querySelector("img").src,
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Added to cart!");
    });
});


// DISPLAY CART ITEMS (for cart.html)
function loadCart() {
    let container = document.getElementById("cart-items");
    if (!container) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    container.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        container.innerHTML += `
            <div class="cart-card">
                <img src="${item.img}">
                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <p><b>Price: Rs ${item.price}</b></p>
                </div>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total-price").innerText = total;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

loadCart();
