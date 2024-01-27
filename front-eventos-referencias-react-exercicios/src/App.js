import { useRef } from "react";
import "./App.css";

function App() {
  const countRef = useRef(0);
  const incrementRef = useRef(null);
  const incrementLet = useRef(null);
  const spanRef = useRef(null);
  const spanLet = useRef(null);

  let count = 0;

  console.log("Renderizou");
  console.log(countRef.current, "countRef");
  console.log(count, "count");

  const handleIncrementRef = () => {
    countRef.current += 1;
    spanRef.current.innerText = countRef.current;
    console.log("Valor de countRef", countRef.current);
  };

  const handleIncrementLet = () => {
    count++;
    spanLet.current.innerText = count;
    console.log("Valor de count", count);
  };

  return (
    <div className="App">
      <button
        ref={incrementRef}
        onClick={() => {
          handleIncrementRef();
        }}
      >
        Increment ref
      </button>
      <span ref={spanRef}>{countRef.current}</span>
      <button
        ref={incrementLet}
        onClick={() => {
          handleIncrementLet();
        }}
      >
        Increment let
      </button>
      <span ref={spanLet}>{count}</span>
    </div>
  );
}

export default App;
