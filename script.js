const product = {
    item_id: "SKU_001",
    item_name: "Cool Gadget",
    price: 1200,
    quantity: 1
};

/* GA4 — view_item on load */
window.dataLayer.push({
    event: "view_item",
    ecommerce: {
        items: [product]
    }
});

/* Add to Cart */
function addToCart() {
    document.getElementById("cart-status").innerText = "1 item added";

    window.dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
            items: [product]
        }
    });

    console.log("add_to_cart event pushed");
}

/* Purchase */
function purchase() {
    window.dataLayer.push({
        event: "purchase",
        ecommerce: {
            transaction_id: "T_" + Date.now(),
            value: product.price,
            currency: "BDT",
            items: [product]
        }
    });

    alert("Thank you for purchase!");
    console.log("purchase event pushed");
}
