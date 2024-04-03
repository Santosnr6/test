import './pokemonCard.css';

function PokemonCard({ pokemon }) {
  return (
    <article className="pokemon-card">
        <div className="card-top">
            <img 
                src={ pokemon.image } 
                alt={'Picture of ' +  pokemon.name } 
                style={ { backgroundColor: pokemon.type[0].color } }
            />
        </div>
        <div className="card-middle">
            <h3 className="pokemon-name">{ pokemon.name }</h3>
            <h4>
                { pokemon.type.length > 1 ? pokemon.type[0].name + ' / ' + pokemon.type[1].name : pokemon.type[0].name }
            </h4>
        </div>
        <div className="card-bottom">
            <p className="card-stat">Attack: { pokemon.stats.attack }</p>
            <p className="card-stat">Defense: { pokemon.stats.defense }</p>
            <p className="card-stat">Sp. Attack: { pokemon.stats.specialAttack }</p>
            <p className="card-stat">Sp. Defense: { pokemon.stats.specialDefense }</p>
            <p className="card-stat">HP: { pokemon.stats.hp }</p>
            <p className="card-stat">Speed: { pokemon.stats.attack }</p>
            <p className="card-stat card-stat--span-two">Total: { pokemon.stats.total }</p>
        </div>
    </article>
  )
}

export default PokemonCard
