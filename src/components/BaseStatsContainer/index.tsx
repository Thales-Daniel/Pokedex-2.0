import React from "react"

import {
  BaseStatContainerSection,
  ContainerWithNameDiv,
  NameStat,
  StatsBarContainerDiv,
} from "./style"
import StatsBar from "../StatsBar"
import { PokemonStatsType } from "../../shared/types/pokemonType"

function BaseStatsContainer({ stats }: { stats: PokemonStatsType[] }) {
  return (
    <BaseStatContainerSection>
      Stats
      <ContainerWithNameDiv>
        {stats?.map(({ stat, base_stat: baseState }) => (
          <StatsBarContainerDiv key={stat.name}>
            <NameStat>{stat.name}</NameStat>
            <StatsBar width={baseState} />
          </StatsBarContainerDiv>
        ))}
      </ContainerWithNameDiv>
    </BaseStatContainerSection>
  )
}

export default BaseStatsContainer
