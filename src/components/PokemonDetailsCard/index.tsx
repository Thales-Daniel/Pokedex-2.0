import React, { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { PokemonDetails } from "../../shared/types/pokemonType"
import { getPokemonByName } from "../../services/getPokemons"
// import "./style"

function PokemonDetailsCard() {
  const [pokemonDetails, setPokemonsDetails] = useState({} as PokemonDetails)
  const { poke } = useParams<{ poke: string }>()
  const [isLoading, setIsLoading] = useState(true)

  const getPokemon = useCallback(async () => {
    if (poke) {
      const pokeResult = await getPokemonByName(poke)
      setPokemonsDetails(pokeResult)
      console.log(pokeResult)
      setIsLoading(false)
    }
  }, [setPokemonsDetails, setIsLoading])

  useEffect(() => {
    getPokemon()
  }, [getPokemon])

  const { sprites, name, id } = pokemonDetails

  return <main>{id}</main>
}

export default PokemonDetailsCard
