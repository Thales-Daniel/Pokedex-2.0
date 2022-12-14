import React from "react"

import StatsBar from "../../atoms/StatsBar"
import { PokemonStatsType } from "../../../shared/types/pokemonType"
import { ContainerWithNameDiv, NameStat, StatsBarContainerDiv } from "./style"

function BaseStatsContainer({ stats }: { stats: PokemonStatsType[] }) {
  return (
    <ContainerWithNameDiv>
      Stats
      {stats?.map(({ stat, base_stat: baseState }) => (
        <StatsBarContainerDiv key={stat.name}>
          <NameStat>{stat.name}</NameStat>
          <StatsBar width={baseState} />
        </StatsBarContainerDiv>
      ))}
    </ContainerWithNameDiv>
  )
}

export default BaseStatsContainer
