/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from "react"

import { getTypesDetails } from "../../services/getPokemons"
import { PokeSpanTypeCard } from "../../shared/styles/GlobalStyles"
import { TypesDetailsProps } from "../../shared/types/pokemonType"
import {
  WeaknessesAndTypesDiv,
  TypesContainerDiv,
  CardContainerDiv,
} from "./style"

function TypeContainerDetails({ types }: TypesDetailsProps) {
  const [weakness, setWeakness] = useState<string[]>([])
  const [halfDamage, setHalfDamage] = useState<string[]>([])
  const arrWeakness: string[] = []
  const arrHalf: string[] = []

  const getTypes = useCallback(async () => {
    if (types) {
      const { damage_relations: damageRelations } = await getTypesDetails(
        types[0].type.name
      )
      damageRelations.double_damage_from.map(({ name }: { name: string }) =>
        arrWeakness.push(name)
      )

      if (types[1]) {
        const { damage_relations: damage } = await getTypesDetails(
          types[1].type.name
        )

        damage.double_damage_from.map(({ name }: { name: string }) => {
          if (!arrWeakness.includes(name)) {
            arrWeakness.push(name)
          }
        })
        setWeakness(arrWeakness)
      }
    }
  }, [types, setWeakness, getTypesDetails])

  useEffect(() => {
    getTypes()
    console.log(arrWeakness)
  }, [getTypes])

  return (
    <TypesContainerDiv>
      <WeaknessesAndTypesDiv>
        Types
        <CardContainerDiv>
          {types?.map(({ type }) => (
            <PokeSpanTypeCard
              height="1.6rem"
              fontSize="1rem"
              key={type.name}
              theme={type.name}
            >
              {type.name}
            </PokeSpanTypeCard>
          ))}
        </CardContainerDiv>
      </WeaknessesAndTypesDiv>

      <WeaknessesAndTypesDiv>
        Weaknesses
        <CardContainerDiv>
          {weakness?.map((weak: string) => (
            <PokeSpanTypeCard
              height="1.6rem"
              fontSize="1rem"
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
