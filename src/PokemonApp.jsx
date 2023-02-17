import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

const PokemonApp = () => {
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handlePrev = () => {
    dispatch(getPokemons(page - 2));
  };

  const handleNext = () => {
    dispatch(getPokemons(page));
  };

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <ul style={{ height: "260px" }}>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button disabled={isLoading || page === 1} onClick={handlePrev}>
        Prev
      </button>
      <button disabled={isLoading} onClick={handleNext}>
        Next
      </button>
    </>
  );
};

export default PokemonApp;
