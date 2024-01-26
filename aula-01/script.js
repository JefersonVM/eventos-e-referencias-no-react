const input = document.querySelector("#input-task");
const button = document.querySelector("#button-add");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  if(!input.value) return;
  const li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));

  ul.appendChild(li);

    input.value = "";
});
