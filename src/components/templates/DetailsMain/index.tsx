import React, { useCallback, useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { getPokemonByName } from "../../../services/getPokemons"
import { PokemonDetails } from "../../../shared/types/pokemonType"
import BaseStatsContainer from "../../molecules/BaseStatsContainer"
import InforPokeDetails from "../../organism/InforPokeDetails"
import TypeContainerDetails from "../../organism/TypesContainerDetails"
import {
  ContainerSpriteDiv,
  Main,
  NameSpriteDiv,
  NameSpan,
  SpriteImg,
  ContainerAside,
} from "./style"

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
      <ContainerSpriteDiv>
        <NameSpriteDiv>
          <SpriteImg
            src={details?.sprites?.other["official-artwork"]?.front_default}
          />
          <NameSpan>
            {details?.name?.toLocaleUpperCase()} Nº 0{details?.id}
          </NameSpan>
        </NameSpriteDiv>
        <ContainerAside>
          <BaseStatsContainer stats={details?.stats} />
          <TypeContainerDetails types={details?.types} />
        </ContainerAside>
      </ContainerSpriteDiv>
      <InforPokeDetails details={details} />
    </Main>
  )
}

export default DetailsMain
