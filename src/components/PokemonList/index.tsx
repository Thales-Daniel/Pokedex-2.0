import React, { useCallback, useEffect, useState } from "react"

import { getPokemons } from "../../services/getPokemons"
import { PokemonType } from "../../shared/types/pokemonType"
import PokemonCard from "../PokemonCard"
import { PokeContainer, PokeList } from "./style"

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([])
  const [limit, setLimit] = useState(12)

  const getPokemonList = useCallback(async () => {
    const { results } = await getPokemons(limit)
    setPokemonList(results)
  }, [getPokemons, limit, setPokemonList])

  useEffect(() => {
    getPokemonList()
  }, [getPokemonList])

  return (
    pokemonList && (
      <PokeContainer>
        <PokeList>
          {pokemonList.map(({ url, name }) => (
            <PokemonCard key={name} url={url} />
          ))}
        </PokeList>
        <button type="button" onClick={() => setLimit(limit + 12)}>
          Carregar Mais pokemons
        </button>
      </PokeContainer>
    )
  )
}

export default PokemonList
