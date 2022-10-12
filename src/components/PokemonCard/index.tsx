import React, { useCallback, useEffect, useState } from "react"

import { getPokeByUrl } from "../../services/getPokemons"
import { PokemonDetails, PokemonType } from "../../shared/types/pokemonType"
import { PokeId, PokeCard, PokeSprite, PokeTittle } from "./style"

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
      <PokeCard to={`${pokemonDetails.name}`}>
        <PokeSprite
          src={pokemonDetails.sprites?.other["official-artwork"]?.front_default}
          alt={`${pokemonDetails.name} sprite`}
        />
        <PokeId>Nº0{pokemonDetails.id}</PokeId>
        <PokeTittle>{pokemonDetails.name}</PokeTittle>
      </PokeCard>
    )
  )
}

export default PokemonCard
