import "./App.css";

function App() {
  const handleMouseOver = () => {
    const h1 = document.querySelector("h1");
    h1.innerText = "Você passou o mouse...";
  };

  const handleMouseLeave = () => {
    const h1 = document.querySelector("h1");
    h1.innerText = "Você tirou o mouse...";
  };

  return (
    <div className="container">
      <strong
        onMouseOver={() => {
          handleMouseOver();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
      >
        Passe o mouse aqui...
      </strong>
      <h1></h1>
    </div>
  );
}

export default App;
