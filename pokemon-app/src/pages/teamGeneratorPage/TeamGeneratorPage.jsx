import './teamGeneratorPage.css';
import GeneratorForm from '../../components/generatorForm/GeneratorForm';
import { useState } from 'react';
import pokemonObjects from '../../assets/pokemons.js';
import PokemonCard from '../../components/pokemonCard/PokemonCard.jsx';

function TeamGeneratorPage() {
    const [formInput, setFormInput] = useState('');
    const [formAmount, setFormAmount] = useState(1);
    const [pokemonList, setPokemonList] = useState([...pokemonObjects]);
    const [generatedPokemons, setGeneratedPokemons] = useState([]);

    const handleInput = (event) => {
        setFormInput(event.target.value);
    }

    const handleAmount = (event) => {
        setFormAmount(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setGeneratedPokemons([]);
        if(formInput === '') {
            const pokemonListCopy = [...pokemonList]; 
            for(let i = 0; i < formAmount; i++) {
                const generatedPokemon = pokemonListCopy.splice(Math.floor(Math.random() * pokemonListCopy.length), 1);
                setGeneratedPokemons(g => [...g, generatedPokemon[0]]);    
            }
        } else {
            const typeMatchArray = [];
            pokemonList.filter(pokemon => {
                pokemon.type.forEach(type => {
                    if(type.name.toLowerCase() === formInput.toLowerCase()) {
                        typeMatchArray.push(pokemon);
                    }
                });
            });
            if (typeMatchArray.length === 0) {
                console.log("Ingen matchande typ hittades.");
            } else if (typeMatchArray.length <= formAmount) {
                setGeneratedPokemons(typeMatchArray);
            } else {
                const selectedPokemons = [];
                for (let i = 0; i < formAmount; i++) {
                    const randomIndex = Math.floor(Math.random() * typeMatchArray.length);
                    selectedPokemons.push(typeMatchArray[randomIndex]);
                    typeMatchArray.splice(randomIndex, 1);
                }
                setGeneratedPokemons(selectedPokemons);
            }
        }
        
    }


  return (
    <section className="generator-page">
        <h1>Team Generator</h1>
        <GeneratorForm 
            handleInput={ handleInput }
            handleAmount={ handleAmount }
            handleSubmit={ handleSubmit }
        />
        <section className="generator-grid">
        { 
            generatedPokemons.map((pokemon, index) => {
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

export default TeamGeneratorPage;
