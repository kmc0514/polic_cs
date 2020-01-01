const table = document.getElementsByClassName("faq__table");

function toggleHandler(event) {
  const innerTable = event.path[1].getElementsByClassName("faq__table list")[0];
  innerTable.classList.add("show__list");
}

Array.from(table).forEach(toggle => {
  toggle.addEventListener("click", toggleHandler);
});
