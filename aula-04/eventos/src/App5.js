import "./App.css";

function App() {
  const handleInput = (e) => {
   
    const h1 = document.querySelector("h1");

    h1.innerText = e.target.value;
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Digite uma mensagem"
        onInput={(e) => {
          handleInput(e);
        }}
      />
      <h1></h1>
    </div>
  );
}

export default App;
