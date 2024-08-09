import React from "react";
import Image from "next/image";
import { IPokemonWrapper } from "@/components/types/PokemonWrapper";

export const Pokemon: React.FC<IPokemonWrapper> = (props) => {
  const { ...pokemon } = props;

  return (
    <section className="col-span-2 2xl:col-span-2 py-4 rounded-lg cursor-pointer flex flex-col items-center justify-center bg-white transition-all duration-300 hover:border-brand hover:shadow-md hover:scale-105 border-white border-2">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        width="0"
        height="0"
        sizes="100vw"
        className="max-w-32 w-full h-auto"
        priority
      />
      <h3 className="text-xl font-bold">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h3>
    </section>
  );
};
