import { formData } from "./dataBase";

const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const userFormData = formData(name, email, message);

  console.log(userFormData);
  alert("Дякую за підписку на наш сервіс");
});
