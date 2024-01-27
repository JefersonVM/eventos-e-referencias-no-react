import { useRef } from "react";
import "./App.css";

function App() {
  let count = 0;

  const countRef = useRef(0);
  const spanRef = useRef(null);
  const spanLetRef = useRef(null);

  const handleIncrementRef = () => {
    countRef.current++;
    spanRef.current.innerText = countRef.current;
    console.log("incrementar useRef");
  };

  const handleIncrementLet = () => {
    count++;
    spanLetRef.current.innerText = count;
    console.log("incrementar let");
  };

  return (
    <div className="container">
      <button
        onClick={() => {
          handleIncrementRef();
        }}
      >
        incrementar useRef
      </button>
      <strong>Valor do useRef</strong>
      <span ref={spanRef}>{countRef.current}</span>

      <button
        onClick={() => {
          handleIncrementLet();
        }}
      >
        incrementar let
      </button>
      <strong>Valor do let</strong>
      <span ref={spanLetRef}>{count}</span>
    </div>
  );
}

export default App;
