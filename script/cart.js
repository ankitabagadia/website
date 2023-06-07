import nav from "../components/navbar.js";

document.getElementById("nav").innerHTML = nav();

let cartitem = JSON.parse(localStorage.getItem("cartitem")) || [];

let cartui = (products) => {
  products.map((product) => {
    let img = document.createElement("img");
    img.src = product.images[1];
    let price = document.createElement("p");
    price.innerHTML = `price ${product.price}`;
    let name = document.createElement("p");
    name.innerHTML = product.title;
    let qty = document.createElement("span");
    let btn1 = document.createElement("button");
    btn1.innerHTML = "-";
    let btn2 = document.createElement("button");
    btn2.innerHTML = "+";
    let qtydiv = document.createElement("div");

    qty.innerHTML = product.qty;
    qtydiv.append(btn1, qty, btn2);
    let div = document.createElement("div");
    div.append(img, name, price, qtydiv);
    document.getElementById("cart").append(div);

div.setAttribute("class", "cart_box")
qtydiv.setAttribute("class", "btns_box");


  });
};
cartui(cartitem);
