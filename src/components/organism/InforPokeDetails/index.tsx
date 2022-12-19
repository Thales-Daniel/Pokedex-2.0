import React, { useState } from "react"

import { PokemonDetails } from "../../../shared/types/pokemonType"
import AbilitiesContainer from "../../molecules/AbilitiesContainer"
import InforTitle from "../../atoms/InforTitle"
import InforContainerDiv from "./style"

function InforPokeDetails({ details }: { details: PokemonDetails }) {
  const [openAbility, setOpenAbility] = useState("")
  const { weight, base_experience: baseExperience, height, abilities } = details

  return openAbility ? (
    <div>{openAbility}</div>
  ) : (
    <InforContainerDiv>
      <InforTitle title="Height" value={`${height / 10} m`} />
      <InforTitle title="Weight" value={`${weight / 10} kg`} />
      <InforTitle title="Base Exp" value={`${baseExperience} xp`} />
      {abilities ? (
        <AbilitiesContainer
          title="Abilities"
          value={abilities}
          setOpenAbility={setOpenAbility}
        />
      ) : null}
    </InforContainerDiv>
  )
}

export default InforPokeDetails
