import "./App.css";
import {useEffect} from 'react';

function App() {

  useEffect(() => {

  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    console.log('Clicou no botão');
  }
  );

  }
  ,[]);

  return (
    <div className="container">
    <button>Clicar</button>
    </div>
  );
}

export default App;
