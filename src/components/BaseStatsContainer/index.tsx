import React from "react"

import { BaseStatContainerSection, StatsBarContainerDiv } from "./style"
import StatsBar from "../StatsBar"

function BaseStatsContainer({ stat, value }: { stat: string; value: number }) {
  return (
    <BaseStatContainerSection>
      <StatsBarContainerDiv>
        <strong>{stat}</strong>
        <StatsBar width={value} />
      </StatsBarContainerDiv>
    </BaseStatContainerSection>
  )
}

export default BaseStatsContainer
