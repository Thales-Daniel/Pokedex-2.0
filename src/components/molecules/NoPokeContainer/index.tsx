import React from "react"

import NoPokeContainer from "./style"

function NoPokemon() {
  return (
    <NoPokeContainer>
      <h2>No Pokémon match your search</h2>
      <h3>Try these suggestions for finding a Pokemon</h3>
      <li>Check that the name you entered is correct</li>
      <li>Also check that it is of the selected type</li>
    </NoPokeContainer>
  )
}

export default NoPokemon
