const table = document.getElementsByClassName("faq__table");
const list = document.getElementsByClassName("faq__table-list");

function toggleHandler(event) {
  const lists = event.path[1].lastElementChild;
  lists.classList.toggle("show__list");
}

Array.from(table).forEach(tables => {
  tables.addEventListener("click", toggleHandler);
});
