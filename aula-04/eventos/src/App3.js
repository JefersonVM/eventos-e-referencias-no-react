import "./App.css";

function App() {
  const handleAddTask = () => {

    console.log("Clicou");

    const input = document.querySelector("#input-task");
    const ul = document.querySelector("ul");

    if (input.value.trim() === "") {
      input.focus();
      return;
    }
    const li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));

    ul.appendChild(li);

    input.value = "";
  };

  return (
    <div className="container">
      <button onClick={() => {handleAddTask()}}>Clicar</button>
      <input type="text" placeholder="Adicionar Tarefa" id="input-task" />

      <ul></ul>
    </div>
  );
}

export default App;
