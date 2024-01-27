import "./App.css";
import { useRef } from "react";

function App() {
  const movies = [
    { id: 1, name: "O Poderoso Chefão" },
    { id: 2, name: "Pulp Fiction" },
    { id: 3, name: "Clube da Luta" },
    { id: 4, name: "Forrest Gump" },
    { id: 5, name: "O Senhor dos Anéis" },
    { id: 6, name: "Matrix" },
    { id: 7, name: "A Origem" },
    { id: 8, name: "O Silêncio dos Inocentes" },
    { id: 9, name: "Gladiador" },
    { id: 10, name: "A Lista de Schindler" },
  ];

  const inputRef = useRef(null);

  const handleSearchMovies = () => {
    if (!inputRef.current.value.trim()) {
      return;
    }

    const moviesList = document.querySelectorAll("li");

    for (const movie of moviesList) {
      if (
        movie.textContent
          .toLocaleLowerCase()
          .includes(inputRef.current.value.toLocaleLowerCase())
      ) {
        movie.style.display = "block";
        continue;
      }

      movie.style.display = "none";
    }

    inputRef.current.value = "";
  };

  const handleClearMovies = () => {
    const moviesList = document.querySelectorAll("li");

    for (const movie of moviesList) {
      movie.style.display = "block";
    }

    inputRef.current.value = "";
  };

  return (
    <div className="container">
      <div>
        <input type="text" placeholder="Buscar" ref={inputRef} />
        <button
          onClick={() => {
            handleSearchMovies();
          }}
        >
          Buscar
        </button>
        <button
          onClick={() => {
            handleClearMovies();
          }}
        >
          Limpar
        </button>
      </div>
      <ul>
        {movies.map((filme) => (
          <li key={filme.id}>{filme.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
