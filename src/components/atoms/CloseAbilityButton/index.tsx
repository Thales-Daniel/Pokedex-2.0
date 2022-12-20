import React from "react"

import CloseButton from "./style"

function CloseAbilityButton({
  setOpenAbility,
}: {
  setOpenAbility: (_ability: string) => void
}) {
  return <CloseButton onClick={() => setOpenAbility("")}>X Close</CloseButton>
}

export default CloseAbilityButton
