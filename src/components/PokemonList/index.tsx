import React, { useCallback, useEffect, useState } from "react"

import { getPokemons, getByPokeType } from "../../services/getPokemons"
import { PokemonType } from "../../shared/types/pokemonType"
import InputFilter from "../InputFIlter"
import PokemonCard from "../PokemonCard"
import { PokeContainer, PokeList, PokeButton } from "./style"

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([])
  const [filterName, setFilterName] = useState("")
  const [filterType, setFilterType] = useState("")
  const [limit, setLimit] = useState(12)

  const getPokemonList = useCallback(async () => {
    if (filterType) {
      const { pokemon } = await getByPokeType(filterType)
      if (filterName) {
        const lowerSearch = filterName.toLocaleLowerCase()
        const filterPoke = pokemon.filter((element: PokemonType) =>
          element.pokemon?.name?.toLowerCase().includes(lowerSearch)
        )
        setPokemonList(filterPoke)
        return
      }
      setPokemonList(pokemon)
      return
    }
    const { results } = await getPokemons()
    const lowerSearch = filterName.toLocaleLowerCase()
    const filterPoke = results.filter((element: PokemonType) =>
      element.name?.toLowerCase().includes(lowerSearch)
    )
    const sliceResult = filterPoke.slice(0, limit)
    setPokemonList(sliceResult)
  }, [
    getPokemons,
    limit,
    setPokemonList,
    filterType,
    getByPokeType,
    filterName,
  ])

  useEffect(() => {
    getPokemonList()
  }, [getPokemonList])

  return (
    <PokeContainer>
      <InputFilter setName={setFilterName} setType={setFilterType} />
      <PokeList>
        {pokemonList.map((item) => (
          <PokemonCard
            key={item.pokemon ? item.pokemon.name : item.name}
            url={item.pokemon ? item.pokemon.url : item.url}
          />
        ))}
      </PokeList>
      {filterName && filterType && (
        <PokeButton type="button" onClick={() => setLimit(limit + 12)}>
          Carregar Mais pokemons
        </PokeButton>
      )}
    </PokeContainer>
  )
}

export default PokemonList
