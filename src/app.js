import { formData } from "./dataBase";

const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = e.target.elements.name.value; 
  const userEmail = e.target.elements.email.value; 
  const userMessage = e.target.elements.message.value; 

  const userFormData = formData(userName, userEmail, userMessage);

  console.log(userFormData);
  alert("Дякую за підписку на наш сервіс");
});
