const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Smartphone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Smartwatch", price: 7000 }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const cartCount = document.getElementById("cart-count");

function displayProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  totalElement.textContent = total;
  cartCount.textContent = cart.length;
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Order placed successfully!");
  cart = [];
  updateCart();
}

displayProducts();
