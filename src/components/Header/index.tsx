import React from "react"

import { HeaderImage, PokeHeader } from "./style"
import pokeball from "../../shared/images/pokeball-Header.svg"

function Header() {
  return (
    <PokeHeader>
      <HeaderImage src={pokeball} alt="pokeball header" />
    </PokeHeader>
  )
}

export default Header
