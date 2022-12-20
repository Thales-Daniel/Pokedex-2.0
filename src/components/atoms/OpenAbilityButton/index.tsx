import React from "react"

import OpenButton from "./style"
import { AbilityButtonTypes } from "../../../shared/types/globalPropsTypes"

function OpenAbilityButton({
  setOpenAbility,
  abilityName,
}: AbilityButtonTypes) {
  return <OpenButton onClick={() => setOpenAbility(abilityName)}>?</OpenButton>
}

export default OpenAbilityButton
