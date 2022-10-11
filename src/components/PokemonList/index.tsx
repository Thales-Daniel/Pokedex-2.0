import React, { useCallback, useEffect, useState } from "react"

import { getPokemons } from "../../services/getPokemons"
import { PokemonType } from "../../shared/types/pokemonType"
import PokemonCard from "../PokemonCard"

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
    <section>
      <ul>
        {pokemonList.map(({ name, url }) => (
          <PokemonCard url={url} name={name} />
        ))}
      </ul>
      <button type="button" onClick={() => setLimit(limit + 12)}>
        Carregar Mais pokemons
      </button>
    </section>
  )
}

export default PokemonList
