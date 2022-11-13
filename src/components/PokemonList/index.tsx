import React, { useCallback, useContext, useEffect, useState } from "react"
import { FilterPokeContext } from "../../contexts/FilterPokeContext"

import { getPokemons, getByPokeType } from "../../services/getPokemons"
import { PokemonType } from "../../shared/types/pokemonType"
import NoPokemon from "../NoPokeContainer"
import PokemonCard from "../PokemonCard"
import TypeFilter from "../TypeFilter"
import { PokeContainerMain, PokeList, PokeButton, PokeContainer } from "./style"

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>(Array(1))
  const { filterName } = useContext(FilterPokeContext)
  const [filterType, setFilterType] = useState("")
  const [limit, setLimit] = useState(12)

  const getPokemonList = useCallback(async () => {
    const lowerSearch = filterName.toLocaleLowerCase()
    if (filterType && filterType !== "All") {
      const { pokemon } = await getByPokeType(filterType)
      if (filterName) {
        const filterPoke = pokemon
          .filter((element: PokemonType) =>
            element.pokemon?.name?.toLowerCase().includes(lowerSearch)
          )
          .slice(0, limit)
        setPokemonList(filterPoke)
        return
      }
      setPokemonList(pokemon.slice(0, limit))
      return
    }
    const { results } = await getPokemons()
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
      <TypeFilter setFilterType={setFilterType} />
      <PokeContainerMain>
        <PokeList>
          {pokemonList.map((item) => (
            <PokemonCard
              key={item.pokemon ? item.pokemon.name : item.name}
              url={item.pokemon ? item.pokemon.url : item.url}
            />
          ))}
        </PokeList>
        {pokemonList.length > 0 ? (
          <PokeButton type="button" onClick={() => setLimit(limit + 12)}>
            Load more pokemons
          </PokeButton>
        ) : (
          <NoPokemon />
        )}
      </PokeContainerMain>
    </PokeContainer>
  )
}

export default PokemonList
