import React from "react"

import { PokemonDetails } from "../../../shared/types/pokemonType"
import BaseStatsContainer from "../BaseStatsContainer"
import InforPokeDetails from "../InforPokeDetails"
import TypeContainerDetails from "../TypesContainerDetails"
import ContainerAside from "./style"

function ContainerAsideDetails({ details }: { details: PokemonDetails }) {
  return (
    <ContainerAside>
      <BaseStatsContainer stats={details?.stats} />
      <TypeContainerDetails types={details?.types} />
      <InforPokeDetails details={details} />
    </ContainerAside>
  )
}

export default ContainerAsideDetails
