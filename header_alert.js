const alert = document.getElementById("headerAlert");
const closeBtn = document.getElementById("alertCloseBtn");

function closeHandler(event) {
  alert.classList.add("alert-none");
}

function closeAlert() {
  closeBtn.addEventListener("click", closeHandler);
}

closeAlert();
