import React from "react";
import debounce from "lodash.debounce";
import { IPokemonWrapper } from "../types/PokemonWrapper";

export const useFetchPokemons = () => {
  const [limit, setLimit] = React.useState(20);
  const [offset, setOffset] = React.useState(0);
  const [pokemons, setPokemons] = React.useState<IPokemonWrapper[]>([]);
  const [defaultPokemons, setDefaultPokemons] = React.useState<
    IPokemonWrapper[]
  >([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");

  const loadPokemons = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_POKE_API_ENDPOINT}/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    const finalPokemons = data.results.map((pokemon: IPokemonWrapper) => {
      const urlParts = pokemon.url.split("/");
      const id = parseInt(urlParts[urlParts.length - 2]);
      return { ...pokemon, id };
    });

    setLoading(false);
    setDefaultPokemons(finalPokemons);
    setPokemons(finalPokemons);
  };

  const loadMorePokemons = () => {
    setLimit(limit + 20);
  };

  const searchPokemon = debounce(async (value: string) => {
    setLoading(true);

    if (value === "") {
      setSearch(value);
      setPokemons(defaultPokemons);
      setLoading(false);
      return;
    }

    setSearch(value);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_POKE_API_ENDPOINT}/pokemon?limit=-1`
    );
    const data = await res.json();
    const allPokemons = data.results.map((pokemon: IPokemonWrapper) => {
      const urlParts = pokemon.url.split("/");
      const id = parseInt(urlParts[urlParts.length - 2]);
      return { ...pokemon, id };
    });

    const filteredPokemons = allPokemons.filter((pokemon: IPokemonWrapper) =>
      pokemon.name.includes(value)
    );

    setLoading(false);
    setPokemons(filteredPokemons);
  }, 750);

  React.useEffect(() => {
    loadPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, offset]);

  return {
    pokemons,
    loading,
    search,
    loadPokemons,
    loadMorePokemons,
    searchPokemon,
  };
};
