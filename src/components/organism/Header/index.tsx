import React, { useContext } from "react"
import { FilterPokeContext } from "../../../contexts/FilterPokeContext"

import pokemonLogo from "../../../shared/images/pokemon-logo-name.png"
import InputFilter from "../../molecules/InputFIlter"
import { PokeHeader, PokemonLogo, ContainerLogo } from "./style"

function Header() {
  const { setFilterName } = useContext(FilterPokeContext)

  return (
    <PokeHeader>
      <ContainerLogo>
        <PokemonLogo src={pokemonLogo} alt="pokemon name logo" />
        <p>Find any pokemon you want</p>
      </ContainerLogo>
      <InputFilter setName={setFilterName} />
    </PokeHeader>
  )
}

export default Header
