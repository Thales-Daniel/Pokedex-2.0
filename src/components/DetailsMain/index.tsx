import React, { useCallback, useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { getPokemonByName } from "../../services/getPokemons"
import { PokemonDetails } from "../../shared/types/pokemonType"
import TypeContainerDetails from "../TypesContainerDetails"
import {
  ContainerSpriteDiv,
  IdSpan,
  Main,
  NameIdContainer,
  NameSpan,
  SpriteImg,
} from "./style"

function DetailsMain() {
  const { name } = useParams()

  const [details, setDetails] = useState({} as PokemonDetails)

  const getPoke = useCallback(async () => {
    if (name) {
      const result = await getPokemonByName(name)
      console.log(result)
      setDetails(result)
    }
  }, [setDetails, name])

  useEffect(() => {
    getPoke()
  }, [name])

  return (
    <Main>
      <ContainerSpriteDiv>
        <SpriteImg
          src={details?.sprites?.other["official-artwork"]?.front_default}
        />

        <NameIdContainer>
          <NameSpan>{details?.name?.toLocaleUpperCase()}</NameSpan>
          <IdSpan>Nº 0{details?.id}</IdSpan>
        </NameIdContainer>
      </ContainerSpriteDiv>
      <TypeContainerDetails
        types={["grass, poison"]}
        weaknesses={["steel", "fire"]}
      />
    </Main>
  )
}

export default DetailsMain
