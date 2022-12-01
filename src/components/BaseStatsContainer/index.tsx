import React from "react"

import {
  BaseStatContainerSection,
  NameContainer,
  StatsBarContainerDiv,
} from "./style"
import StatsBar from "../StatsBar"
import { PokemonStatsType } from "../../shared/types/pokemonType"

function BaseStatsContainer({ stats }: { stats: PokemonStatsType[] }) {
  return (
    <BaseStatContainerSection>
      <StatsBarContainerDiv>
        {stats?.map(({ stat }) => (
          <NameContainer>{stat.name}</NameContainer>
        ))}
      </StatsBarContainerDiv>

      <StatsBarContainerDiv>
        {stats?.map(({ base_stat: baseState }) => (
          <StatsBar width={baseState} />
        ))}
      </StatsBarContainerDiv>
    </BaseStatContainerSection>
  )
}

export default BaseStatsContainer
