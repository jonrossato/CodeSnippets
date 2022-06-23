const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendButton = document.getElementById("send");
const panel = document.getElementById("panel");
let selectedRating = "Satisfied";

const removeActive = () => {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
};

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendButton.addEventListener("click", (e) => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Muito obrigado!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>Usaremos seu feedback para melhorar nosso suporte ao cliente
</p>
    `;
});