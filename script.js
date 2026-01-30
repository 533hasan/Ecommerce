/* ===============================
   GA4 gtag base setup
   =============================== */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

/* Replace with your GA4 Measurement ID */
gtag("js", new Date());
gtag("config", " G-MP5PLDD42H");

/* ===============================
   Product Object (GA4 format)
   =============================== */
const product = {
  item_id: "SKU_001",
  item_name: "Cool Gadget",
  item_brand: "MyBrand",
  item_category: "Electronics",
  item_category2: "Gadgets",
  item_variant: "Black",
  price: 1200,
  quantity: 1
};

/* ===============================
   VIEW ITEM (fire on page load)
   =============================== */
gtag("event", "view_item", {
  currency: "BDT",
  value: product.price,
  items: [product]
});

/* ===============================
   ADD TO CART
   =============================== */
function addToCart() {
  const status = document.getElementById("cart-status");
  if (status) {
    status.innerText = "1 item added";
  }

  gtag("event", "add_to_cart", {
    currency: "BDT",
    value: product.price * product.quantity,
    items: [product]
  });

  console.log("GA4 add_to_cart event sent");
}

/* ===============================
   PURCHASE
   =============================== */
function purchase() {
  gtag("event", "purchase", {
    transaction_id: "T_" + Date.now(),
    currency: "BDT",
    value: product.price * product.quantity,
    tax: 50,
    shipping: 100,
    items: [product]
  });

  alert("Thank you for your purchase!");
  console.log("GA4 purchase event sent");
}
