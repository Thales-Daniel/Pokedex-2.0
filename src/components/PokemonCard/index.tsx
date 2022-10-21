import React, { useCallback, useEffect, useState } from "react"

import { getPokeByUrl } from "../../services/getPokemons"
import { PokemonDetails, PokemonType } from "../../shared/types/pokemonType"
import {
  PokeId,
  PokeCard,
  PokeSprite,
  PokeTittle,
  PokeDescription,
  PokeTypeContainer,
  PokeSpanTypeCard,
  PokeLink,
} from "./style"

function PokemonCard({ url }: PokemonType) {
  const [pokemonDetails, setPokemonsDetails] = useState({} as PokemonDetails)

  const getPokemon = useCallback(async () => {
    const pokeResult = await getPokeByUrl(url)
    setPokemonsDetails(pokeResult)
  }, [setPokemonsDetails])

  const { sprites, name, id } = pokemonDetails

  useEffect(() => {
    getPokemon()
  }, [getPokemon])

  return (
    pokemonDetails && (
      <PokeCard>
        <PokeLink to={`${name}`}>
          <PokeSprite
            src={
              sprites?.other["official-artwork"]?.front_default
                ? sprites?.other["official-artwork"]?.front_default
                : sprites?.front_default
            }
            alt={`${pokemonDetails.name} sprite`}
          />
        </PokeLink>
        <PokeDescription>
          <PokeId>Nº0{id}</PokeId>
          <PokeTittle>{name}</PokeTittle>
        </PokeDescription>
        <PokeTypeContainer>
          {pokemonDetails.types?.map(({ type }) => (
            <PokeSpanTypeCard key={type.name} theme={type.name}>
              {type.name}
            </PokeSpanTypeCard>
          ))}
        </PokeTypeContainer>
      </PokeCard>
    )
  )
}

export default PokemonCard
