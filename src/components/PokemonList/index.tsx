import React, { useCallback, useEffect, useState } from "react"

import { getPokemons } from "../../services/getPokemons"
import { PokemonType } from "../../shared/types/pokemonType"
import InputFilter from "../InputFIlter"
import PokemonCard from "../PokemonCard"
import { PokeContainer, PokeList, PokeButton } from "./style"

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([])
  const [loading, setLoading] = useState(true)
  const [limit, setLimit] = useState(12)

  const getPokemonList = useCallback(async () => {
    const { results } = await getPokemons(limit)
    setPokemonList(results)
    setLoading(false)
  }, [getPokemons, limit, setPokemonList, loading])

  useEffect(() => {
    getPokemonList()
  }, [getPokemonList])

  return (
    <PokeContainer>
      <InputFilter />
      <PokeList>
        {pokemonList.map(({ url, name }) => (
          <PokemonCard key={name} url={url} />
        ))}
      </PokeList>
      <PokeButton type="button" onClick={() => setLimit(limit + 12)}>
        Carregar Mais pokemons
      </PokeButton>
    </PokeContainer>
  )
}

export default PokemonList
