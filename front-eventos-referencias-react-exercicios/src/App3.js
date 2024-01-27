import { useRef } from "react";
import "./App.css";

function App3() {
  const jefersonRef = useRef(null);
  const evellynRef = useRef(null);
  const emillyRef = useRef(null);

  const handleStyleJeferson = () => {
    jefersonRef.current.style.color = "red";
    jefersonRef.current.style.fontSize = "30px";
  };

  const handleStyleEvellyn = () => {
    evellynRef.current.style.color = "green";
    evellynRef.current.style.fontSize = "60px";
  };

  const handleStyleEmilly = () => {
    emillyRef.current.style.color = "blue";
    emillyRef.current.style.fontSize = "90px";
  };

  return (
    <div className="App">
      <strong
        ref={jefersonRef}
        onClick={() => {
          handleStyleJeferson();
        }}
      >
        Jeferson
      </strong>
      <strong
        ref={evellynRef}
        onClick={() => {
          handleStyleEvellyn();
        }}
      >
        Evellyn
      </strong>
      <strong
        ref={emillyRef}
        onClick={() => {
          handleStyleEmilly();
        }}
      >
        Emilly
      </strong>
    </div>
  );
}

export default App3;
