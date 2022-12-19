import React from "react"

import { PokemonDetails } from "../../../shared/types/pokemonType"
import { NameSpan, NameSpriteDiv, SpriteImg } from "./style"

function ContainerSpriteDetails({ details }: { details: PokemonDetails }) {
  return (
    <NameSpriteDiv>
      <SpriteImg
        src={details?.sprites?.other["official-artwork"]?.front_default}
      />
      <NameSpan>
        {details?.name?.toLocaleUpperCase()} Nº 0{details?.id}
      </NameSpan>
    </NameSpriteDiv>
  )
}

export default ContainerSpriteDetails
