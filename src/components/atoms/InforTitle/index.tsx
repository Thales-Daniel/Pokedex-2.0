import React from "react"

import { InforTitleDiv, InforValueP } from "./style"

function InforTitle({
  title,
  value,
}: {
  title: string
  value: string | number
}) {
  return (
    <InforTitleDiv>
      {title}
      <InforValueP>{value}</InforValueP>
    </InforTitleDiv>
  )
}

export default InforTitle
