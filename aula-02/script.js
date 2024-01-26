const input = document.querySelector("#input-task");
const strong = document.querySelector("strong");

input.addEventListener("input", (e) => {
  strong.innerText = e.target.value;
});
