import Buttons from "./Buttons"
import Display from "./Display"
import axios from 'axios';
import { useEffect } from 'react';
import usePokemonStore from './store/pokemon-store';

const getPokemons = (addPokemons) => {
  axios.get('http://santosnr6.github.io/Data/pokemons.json')
    .then(response => {
      // console.log(response.data);
      addPokemons(response.data);
    });
}

function App() {
  const { pokemons, addPokemons } = usePokemonStore(state => ({
    pokemons : state.pokemons,
    addPokemons : state.addPokemons
  }));

  useEffect(() => {
    getPokemons(addPokemons);
  }, []);
  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  return (
    <div className="app">
      <Display />
      <Buttons />
      {pokemons.map(pokemon => {
        return <p>{pokemon.name}</p>
      })}
    </div>
  )
}

export default App
