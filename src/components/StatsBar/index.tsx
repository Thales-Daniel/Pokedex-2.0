import React from "react"

import BarDiv from "./style"

function StatsBar({ width }: { width: number }) {
  return <BarDiv width={`${width * 3}px`}>{width}</BarDiv>
}

export default StatsBar
