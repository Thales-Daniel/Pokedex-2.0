import React, { useCallback, useEffect, useState } from "react"
import { getPokemons } from "../../services/getPokemons"

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([])
  const [limit, setLimit] = useState(12)

  const getPokemonList = useCallback(async () => {
    const { results } = await getPokemons(limit)
    setPokemonList(results)
  }, [getPokemons, limit, setPokemonList])

  useEffect(() => {
    getPokemonList()
  }, [getPokemonList])

  console.log(pokemonList)

  return (
    <section>
      <ul>
        {pokemonList.map((pokes, index) => (
          <li>{index}</li>
        ))}
      </ul>
      <button type="button" onClick={() => setLimit(limit + 12)}>
        Carregar Mais pokemons
      </button>
    </section>
  )
}

export default PokemonList
