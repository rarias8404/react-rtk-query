import { pokemonApi } from "../../../api/pokemonApi";
import { startLoadingPokemons, setPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page}`);
    dispatch(setPokemons({ pokemons: data?.results, page: page + 1 }));
  };
};
