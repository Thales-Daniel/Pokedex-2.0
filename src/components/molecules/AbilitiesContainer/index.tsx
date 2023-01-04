import React from "react"

import { ContainerAbilityTypes } from "../../../shared/types/globalPropsTypes"
import OpenAbilityButton from "../../atoms/OpenAbilityButton"
import { AbilitiesContainerLi, AbilitiesValueP } from "./style"

function AbilitiesContainer({
  title,
  value,
  setOpenAbility,
}: ContainerAbilityTypes) {
  return (
    <AbilitiesContainerLi>
      {title}
      {value.map((item) =>
        !item.is_hidden ? (
          <AbilitiesValueP key={item.ability.name}>
            {item.ability.name}
            <OpenAbilityButton
              setOpenAbility={setOpenAbility}
              abilityName={item.ability.name}
            />
          </AbilitiesValueP>
        ) : null
      )}
    </AbilitiesContainerLi>
  )
}

export default AbilitiesContainer
