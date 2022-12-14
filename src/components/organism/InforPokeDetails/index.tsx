import React from "react"

import { PokemonDetails } from "../../../shared/types/pokemonType"
import AbilitiesContainer from "../../atoms/AbilitiesContainer"
import InforTitle from "../../atoms/InforTitle"
import InforContainerDiv from "./style"

function InforPokeDetails({ details }: { details: PokemonDetails }) {
  const { weight, base_experience: baseExperience, height, abilities } = details

  return (
    <InforContainerDiv>
      <InforTitle title="Height" value={`${height / 10} m`} />
      <InforTitle title="Weight" value={`${weight / 10} kg`} />
      <InforTitle title="Base Exp" value={`${baseExperience} xp`} />
      {abilities ? (
        <AbilitiesContainer title="Abilities" value={abilities} />
      ) : null}
      <InforTitle title="tessste" value={`${baseExperience} xp`} />
    </InforContainerDiv>
  )
}

export default InforPokeDetails
