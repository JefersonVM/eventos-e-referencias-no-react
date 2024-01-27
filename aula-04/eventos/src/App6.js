import "./App.css";
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const ulRef = useRef(null);

  const handleAddTask = () => {
    if (!inputRef.current.value) return;
    const li = document.createElement("li");

    li.appendChild(document.createTextNode(inputRef.current.value));

    ulRef.current.appendChild(li);

    inputRef.current.value = "";
  };

  return (
    <div className="container">
      <button
        onClick={() => {
          handleAddTask();
        }}
      >
        Clicar
      </button>
      <input type="text" placeholder="Adicionar Tarefa" ref={inputRef} />

      <ul ref={ulRef}></ul>
    </div>
  );
}

export default App;
