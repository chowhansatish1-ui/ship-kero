let products = [
  {name: "Bluetooth Earbuds", price: 999},
  {name: "Smart Watch", price: 1499},
  {name: "Power Bank", price: 799}
];

let cart = [];

let productDiv = document.getElementById("products");

products.forEach((p, index) => {
  let div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;
  productDiv.appendChild(div);
});

function addToCart(index){
  cart.push(products[index]);
  displayCart();
}

function displayCart(){
  let cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    cartList.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

function checkout(){
  alert("Razorpay integration coming next step!");
}

function whatsappOrder(){
  let text = "Order:%0A";
  cart.forEach(item => {
    text += item.name + " - ₹" + item.price + "%0A";
  });

  window.open("https://wa.me/91XXXXXXXXXX?text=" + text);
}
