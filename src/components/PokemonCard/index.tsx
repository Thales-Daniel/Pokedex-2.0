import React, { useCallback, useContext, useEffect, useState } from "react"
import { ModalContext } from "../../contexts/ModalContext"

import { getPokeByUrl } from "../../services/getPokemons"
import { PokemonDetails, PokemonType } from "../../shared/types/pokemonType"
import SkeletonCards from "../SkeletonCards"
import {
  PokeId,
  PokeCard,
  PokeSprite,
  PokeTittle,
  PokeDescription,
  PokeTypeContainer,
  PokeSpanTypeCard,
} from "./style"

function PokemonCard({ url }: PokemonType) {
  const [pokemonDetails, setPokemonsDetails] = useState({} as PokemonDetails)
  const [isLoading, setIsLoading] = useState(true)
  const { setModal } = useContext(ModalContext)

  const getPokemon = useCallback(async () => {
    const pokeResult = await getPokeByUrl(url)
    setPokemonsDetails(pokeResult)
    setIsLoading(false)
  }, [setPokemonsDetails, setIsLoading])

  const { sprites, name, id } = pokemonDetails

  useEffect(() => {
    getPokemon()
  }, [getPokemon])

  return (
    <div>
      {isLoading ? (
        <SkeletonCards />
      ) : (
        <PokeCard type="button" onClick={() => setModal(true)}>
          <PokeSprite
            src={
              sprites?.other["official-artwork"]?.front_default
                ? sprites?.other["official-artwork"]?.front_default
                : sprites?.front_default
            }
            alt={`${pokemonDetails.name} sprite`}
          />
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
      )}
    </div>
  )
}

export default PokemonCard
