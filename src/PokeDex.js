import React from "react";
import PokemonSelect from "./PokemonSelect";
import useAxios from "./hooks/useAxios";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon, error] = useAxios();
  const fetchPokemon = async (name) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    await addPokemon(url);
  }
  if(error) {
    return (
      <div>Sorry, there was an error.</div>
    );
  }
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={fetchPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
