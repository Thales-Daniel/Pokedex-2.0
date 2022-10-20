import React, { useCallback, useEffect, useState } from "react"

import { getPokemons, getByPokeType } from "../../services/getPokemons"
import { PokemonType } from "../../shared/types/pokemonType"
import InputFilter from "../InputFIlter"
import PokemonCard from "../PokemonCard"
import { PokeContainer, PokeList, PokeButton, NoPokeContainer } from "./style"

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([])
  const [filterName, setFilterName] = useState("")
  const [filterType, setFilterType] = useState("")
  const [limit, setLimit] = useState(12)

  const getPokemonList = useCallback(async () => {
    if (filterType && filterType !== "Todos") {
      const { pokemon } = await getByPokeType(filterType)
      if (filterName) {
        const lowerSearch = filterName.toLocaleLowerCase()
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
      {pokemonList.length === 0 ? (
        <NoPokeContainer>
          <h2>Nenhum Pokémon corresponde à sua pesquisa</h2>
          <h3>Experimente estas sugestões para encontrar um Pokémon</h3>
          <li>Verifique se o nome digitado está correto</li>
          <li>Verifique também se ele é do tipo selecionado</li>
        </NoPokeContainer>
      ) : (
        <PokeButton type="button" onClick={() => setLimit(limit + 12)}>
          Carregar Mais pokemons
        </PokeButton>
      )}
    </PokeContainer>
  )
}

export default PokemonList
