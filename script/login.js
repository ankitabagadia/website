import nav from "../components/navbar.js";

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let user = JSON.parse(localStorage.getItem("user")) || null;
  console.log(user);

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email == user.email && password == user.password) {
    alert("logged in successfully");
    localStorage.setItem("loggedin", true);
    window.location.href = "/index.html";
  } else if (email == user.email && password != user.password) {
    alert("Invalid  password");
    localStorage.setItem("loggedin", false);
  } else {
    alert("Invalid email");
    localStorage.setItem("loggedin", false);
  }
});

document.getElementById("nav").innerHTML=nav()


