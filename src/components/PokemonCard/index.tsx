import React, { useCallback, useEffect, useState } from "react"

import { getPokeByUrl } from "../../services/getPokemons"
import { PokemonDetails, PokemonType } from "../../shared/types/pokemonType"
import { Card } from "./style"

function PokemonCard({ url }: PokemonType) {
  const [pokemonDetails, setPokemonsDetails] = useState({} as PokemonDetails)

  const getPokemon = useCallback(async () => {
    const pokeResult = await getPokeByUrl(url)
    setPokemonsDetails(pokeResult)
  }, [url, setPokemonsDetails])

  useEffect(() => {
    getPokemon()
  }, [getPokemon])

  return (
    pokemonDetails && (
      <Card>
        <img
          src={pokemonDetails.sprites?.other["official-artwork"]?.front_default}
          alt={`${pokemonDetails.name} sprite`}
        />
        <p>{pokemonDetails.id}</p>
        <h1>{pokemonDetails.name}</h1>
      </Card>
    )
  )
}

export default PokemonCard
