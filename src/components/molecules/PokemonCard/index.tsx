import React, { useCallback, useEffect, useState } from "react"

import { getPokeByUrl } from "../../../services/getPokemons"
import { PokeSpanTypeCard } from "../../../shared/styles/GlobalStyles"
import { PokemonDetails, PokemonType } from "../../../shared/types/pokemonType"
import SkeletonCards from "../SkeletonCards"
import {
  PokeId,
  PokeCard,
  PokeSprite,
  PokeTittle,
  PokeDescription,
  PokeTypeContainer,
  DetailsLink,
} from "./style"

function PokemonCard({ url }: PokemonType) {
  const [pokemonDetails, setPokemonsDetails] = useState({} as PokemonDetails)
  const [isLoading, setIsLoading] = useState(true)

  const getPokemon = useCallback(async () => {
    const pokeResult = await getPokeByUrl(url)
    setPokemonsDetails(pokeResult)
    setIsLoading(false)
  }, [setPokemonsDetails, setIsLoading])

  const { sprites, name, id } = pokemonDetails

  useEffect(() => {
    getPokemon()
  }, [getPokemon])

  if (sprites?.other["official-artwork"]?.front_default) {
    return (
      <div>
        {isLoading ? (
          <SkeletonCards />
        ) : (
          <PokeCard type="button">
            <DetailsLink to={`/details/${name}`}>
              <PokeSprite
                src={sprites?.other["official-artwork"]?.front_default}
                alt={`${pokemonDetails.name} sprite`}
              />
            </DetailsLink>
            <PokeDescription>
              <PokeId>Nº0{id}</PokeId>
              <PokeTittle>{name}</PokeTittle>
            </PokeDescription>
            <PokeTypeContainer>
              {pokemonDetails.types?.map(({ type }) => (
                <PokeSpanTypeCard
                  height=""
                  fontSize=""
                  key={type.name}
                  theme={type.name}
                >
                  {type.name}
                </PokeSpanTypeCard>
              ))}
            </PokeTypeContainer>
          </PokeCard>
        )}
      </div>
    )
  }
  return null
}

export default PokemonCard
