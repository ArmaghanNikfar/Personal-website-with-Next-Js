import React from 'react';

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      <h2>Pokemons</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
