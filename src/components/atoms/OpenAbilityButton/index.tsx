import React from "react"

import OpenButton from "./style"
import { OpenAbilityButtonTypes } from "../../../shared/types/GlobalPropsTypes"

function OpenAbilityButton({
  setOpenAbility,
  abilityName,
}: OpenAbilityButtonTypes) {
  return <OpenButton onClick={() => setOpenAbility(abilityName)}>?</OpenButton>
}

export default OpenAbilityButton
