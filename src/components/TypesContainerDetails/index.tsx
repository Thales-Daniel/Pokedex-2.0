import React from "react"

import { PokeSpanTypeCard } from "../../shared/styles/GlobalStyles"
import { TypesDetailsProps } from "../../shared/types/pokemonType"
import { ContainerWeeknessDiv, TypesContainerDiv } from "./style"

function TypeContainerDetails({ types, weaknesses }: TypesDetailsProps) {
  return (
    <TypesContainerDiv>
      <ContainerWeeknessDiv>
        {types?.map((type: string) => (
          <PokeSpanTypeCard>{type}</PokeSpanTypeCard>
        ))}
      </ContainerWeeknessDiv>

      <ContainerWeeknessDiv>
        {weaknesses?.map((weak: string) => (
          <PokeSpanTypeCard>{weak}</PokeSpanTypeCard>
        ))}
      </ContainerWeeknessDiv>
    </TypesContainerDiv>
  )
}

export default TypeContainerDetails
