import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";


function App() {

  const [apiPokemon, setApiPokemon] = useState([]);//almacena el resultado
  const [despliegue, setDespliegue] = useState('');//detonador de la busqueda

  useEffect(() => {
    if (despliegue !== ''){
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(respuesta => {setApiPokemon((listPrev) => respuesta.data.results)})
    }
  }, [despliegue]);

  const desplegarLista = (event) => {
    event.preventDefault();
    setDespliegue((prev) => "api");
    //console.log("Desplegar ejecutandose");
  };


  return (
    <div>
        <button onClick={(event) => desplegarLista(event)}>Desplegar Pokemones</button>
      <div>
        <h1> Lista de pokemones</h1>
        <ol>
          {apiPokemon.map((pokemon, indice) => {
            return <li key={'pokemon_' + indice}>{pokemon.name}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
