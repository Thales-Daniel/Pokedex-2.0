import React from "react"

import NoPokeContainer from "./style"

function NoPokemon() {
  return (
    <NoPokeContainer>
      <h2>Nenhum Pokémon corresponde à sua pesquisa</h2>
      <h3>Experimente estas sugestões para encontrar um Pokémon</h3>
      <li>Verifique se o nome digitado está correto</li>
      <li>Verifique também se ele é do tipo selecionado</li>
    </NoPokeContainer>
  )
}

export default NoPokemon
