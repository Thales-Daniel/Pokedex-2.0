import React from "react"

import { PokemonType } from "../../shared/types/pokemonType"

function PokemonCard({ url, name }: PokemonType) {
  return <div>{name}</div>
}

export default PokemonCard
