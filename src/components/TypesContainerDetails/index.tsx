import React from "react"

import { PokeSpanTypeCard } from "../../shared/styles/GlobalStyles"
import { TypesDetailsProps } from "../../shared/types/pokemonType"
import {
  WeaknessesAndTypesDiv,
  TypesContainerDiv,
  CardContainerDiv,
} from "./style"

function TypeContainerDetails({ types, weaknesses }: TypesDetailsProps) {
  return (
    <TypesContainerDiv>
      <WeaknessesAndTypesDiv>
        Types
        <CardContainerDiv>
          {types.map((type: string) => (
            <PokeSpanTypeCard
              height="2rem"
              fontSize="1.2rem"
              key={type}
              theme={type}
            >
              {type}
            </PokeSpanTypeCard>
          ))}
        </CardContainerDiv>
      </WeaknessesAndTypesDiv>

      <WeaknessesAndTypesDiv>
        Weaknesses
        <CardContainerDiv>
          {weaknesses.map((weak: string) => (
            <PokeSpanTypeCard
              height="2rem"
              fontSize="1.2rem"
              key={weak}
              theme={weak}
            >
              {weak}
            </PokeSpanTypeCard>
          ))}
        </CardContainerDiv>
      </WeaknessesAndTypesDiv>
    </TypesContainerDiv>
  )
}

export default TypeContainerDetails
