import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const button = document.querySelector("button");
    const input = document.querySelector("#input-task");
    const ul = document.querySelector("ul");

    button.addEventListener("click", () => {
      if (input.value.trim() === "") {
        input.focus();
        return;
      }
      const li = document.createElement("li");

      li.appendChild(document.createTextNode(input.value));

      ul.appendChild(li);

      input.value = "";
    });
  }, []);

  return (
    <div className="container">
      <button>Clicar</button>
      <input type="text" placeholder="Adicionar Tarefa" id="input-task" />

      <ul></ul>
    </div>
  );
}

export default App;
