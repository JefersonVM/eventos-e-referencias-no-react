const input = document.querySelector("#input-task");
const ul = document.querySelector("ul");

input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));

  ul.appendChild(li);

  input.value = "";
});
