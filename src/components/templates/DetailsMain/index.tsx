import React, { useCallback, useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { getPokemonByName } from "../../../services/getPokemons"
import { PokemonDetails } from "../../../shared/types/pokemonType"
import ContainerAsideDetails from "../../organism/ContainerAsideDetails"
import ContainerSpriteDetails from "../../organism/ContainerSpriteDetails"
import BackToDashLink from "../../atoms/BackToDashLink"
import Main from "./style"

function DetailsMain() {
  const { name } = useParams()

  const [details, setDetails] = useState({} as PokemonDetails)

  const getPoke = useCallback(async () => {
    if (name) {
      const result = await getPokemonByName(name)
      setDetails(result)
    }
  }, [setDetails, name])

  useEffect(() => {
    getPoke()
  }, [name])

  return (
    <Main>
      <ContainerSpriteDetails details={details} />
      <ContainerAsideDetails details={details} />
      <BackToDashLink />
    </Main>
  )
}

export default DetailsMain
