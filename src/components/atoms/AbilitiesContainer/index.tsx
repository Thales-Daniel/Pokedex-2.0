import React from "react"

import { AbilitiesContainerDiv, AbilitiesValueP } from "./style"

function AbilitiesContainer({
  title,
  value,
}: {
  title: string
  value: { ability: { name: string; url: string }; is_hidden: boolean }[]
}) {
  return (
    <AbilitiesContainerDiv>
      {title}
      {value.map((item) =>
        !item.is_hidden ? (
          <AbilitiesValueP>{item.ability.name}</AbilitiesValueP>
        ) : null
      )}
    </AbilitiesContainerDiv>
  )
}

export default AbilitiesContainer
