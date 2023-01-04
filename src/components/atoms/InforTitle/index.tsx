import React from "react"

import { InforTitleLi, InforValueP } from "./style"

function InforTitle({
  title,
  value,
}: {
  title: string
  value: string | number
}) {
  return (
    <InforTitleLi>
      {title}
      <InforValueP>{value}</InforValueP>
    </InforTitleLi>
  )
}

export default InforTitle
