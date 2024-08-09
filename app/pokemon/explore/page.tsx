"use client";
import React from "react";
import { useFetchPokemons } from "@/components/hooks/useFetchPokemons";
import { Pokemon } from "@/components/components/cards/Pokemon";
import { Input } from "@/components/components/fields/Input";
import { MdCatchingPokemon, MdOutlineLogout } from "react-icons/md";
import { logoutAction } from "@/components/actions/auth-action";
import { redirect } from "next/navigation";

export default function Shipping() {
  const { pokemons, loading, search, loadMorePokemons, searchPokemon } =
    useFetchPokemons();

  return (
    <main>
      <section className="container mx-auto py-2.5">
        <section>
          <Input
            id="Search Pokemon"
            onChange={(value) => searchPokemon(value)}
            placeholder="Search Pokemon"
            className="w-full"
            type="search"
          />
        </section>

        <section className="grid grid-cols-12 gap-y-4">
          {pokemons.length > 0 ? (
            pokemons.map((pokemon, index) => (
              <Pokemon key={index} {...pokemon} />
            ))
          ) : loading ? (
            <section className="col-span-12 flex items-center justify-center py-40">
              <MdCatchingPokemon className="animate-bounce mr-3 text-brand-dark text-3xl" />
              <h5 className="text-2xl font-semibold">Loading...</h5>
            </section>
          ) : (
            <section className="col-span-12 flex items-center justify-center py-40">
              <MdCatchingPokemon className="mr-3 text-gray-600 text-3xl" />
              <h5 className="text-2xl font-semibold">Pokemon Not Found!</h5>
            </section>
          )}
        </section>

        {pokemons.length > 0 && search === "" ? (
          <button
            onClick={loadMorePokemons}
            className="mx-auto my-6 bg-white text-opacity-95 flex items-center justify-center px-4 py-2 rounded-md border-brand border-2 group transition-all duration-300 hover:scale-110"
          >
            <MdCatchingPokemon className="group-hover:animate-spin mr-2 text-brand-dark text-lg" />
            <p className="font-bold">Load More</p>
          </button>
        ) : null}

        <button
          onClick={async () => {
            await logoutAction();
          }}
          className="fixed bottom-5 right-5 bg-brand px-4 py-2 text-white text-opacity-90 rounded-full font-semibold flex items-center"
        >
          <MdOutlineLogout className="mr-2 text-lg" />
          Logout
        </button>
      </section>
    </main>
  );
}
