const cardProceed = document.querySelector(".card-solving");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-screen");
const spinner = document.querySelector(".spinner");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  const html = `<div class= 'spinner'>
    <i class="fa fa-refresh fa-spin" style="font-size:50px"></i>
    <p class ="message">Waiting few moments. We are proceeding your request...</p>
  </div>`;
  modal.insertAdjacentHTML("beforeend", html);
  setTimeout(function () {
    closeButton.nextElementSibling.remove();
    const markup = ` 
    <div class="check-success" id ="fade">
    <i class="far fa-check-circle fa-3x" style ="color: green;"></i>
    <p class ="message">Your transaction is successful !</p>
  </div>`;
    modal.insertAdjacentHTML("beforeend", markup);
  }, 3000);
};
cardProceed.addEventListener("click", openModal);

closeButton.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  closeButton.nextElementSibling.remove();
});
