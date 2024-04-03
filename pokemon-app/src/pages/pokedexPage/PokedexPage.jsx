import './pokedexPage.css';
import pokemonObjects from '../../assets/pokemons.js';
import { useState } from 'react';
import PokemonCard from '../../components/pokemonCard/PokemonCard.jsx';

function PokedexPage() {
    const [pokemonList, setPokemonList] = useState([...pokemonObjects]);
    console.log(pokemonList);
    

  return (
    <section className="pokedex-page">
        <h1>Pokédex</h1>
        <section className="pokedex-grid">
            {
                pokemonList.map((pokemon, index) => {
                    return <PokemonCard 
                            pokemon={ pokemon }
                            key={ index }
                        />
                })
            }
        </section>
    </section>
  )
}

export default PokedexPage;
