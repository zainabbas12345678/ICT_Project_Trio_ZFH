let cart = [];
let total = 0;

document.querySelectorAll(".addCart").forEach(btn => {
    btn.addEventListener("click", function() {

        let productCard = this.parentElement;
        let name = productCard.querySelector("h3").innerText;
        let price = parseInt(productCard.querySelector(".price").innerText);

        cart.push({ name, price });
        total += price;

        alert(name + " added to cart!");

        updateCart();
    });
});

document.getElementById("openCart").onclick = () => {
    document.getElementById("cartBox").style.display = "block";
};

document.getElementById("closeCart").onclick = () => {
    document.getElementById("cartBox").style.display = "none";
};

function updateCart() {
    let cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = "";

    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<p>${item.name} - Rs. ${item.price}</p>`;
    });

    document.getElementById("totalPrice").innerText = "Total: Rs. " + total;
}

document.getElementById("buyNow").onclick = () => {
    alert("Your total bill is Rs. " + total + "\nThank you for shopping!");
};
