import React from "react"

import pokemonLogo from "../../../shared/images/pokemon-logo-name.png"
import BackToDashLink from "../../atoms/BackToDashLink"
import { PokeHeader, PokemonLogo, ContainerLogo } from "./style"

function DetailsHeader() {
  return (
    <PokeHeader>
      <ContainerLogo>
        <PokemonLogo src={pokemonLogo} alt="pokemon name logo" />
        <p>Find any pokemon you want</p>
      </ContainerLogo>
      <BackToDashLink />
    </PokeHeader>
  )
}

export default DetailsHeader
