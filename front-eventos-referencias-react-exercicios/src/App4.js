import { useRef } from "react";
import "./App.css";

function App4() {
  const isOpen = useRef(false);
  const h1Ref = useRef();

  function handleOpen() {
    isOpen.current = true;
    h1Ref.current.innerText = "Está aberta";
    showMessage();
  }

  function handleClose() {
    isOpen.current = false;
    h1Ref.current.innerText = "Está fechada";
    showMessage();
  }

  function handleClear() {
    h1Ref.current.innerText = "";
  }

  function showMessage() {
    console.log(`Está aberta? ${isOpen.current ? "sim" : "não"}`);
  }

  return (
    <div className="App">
      <button onClick={handleOpen}>Abrir</button>
      <button onClick={handleClose}>Fechar</button>
      <button onClick={handleClear}>Limpar</button>
      <h1 ref={h1Ref}> </h1>
    </div>
  );
}

export default App4;
