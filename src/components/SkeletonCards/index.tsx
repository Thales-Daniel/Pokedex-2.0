import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

import {
  CardContainerSkeleton,
  DescriptionContainerSkeleton,
  IdSkeleton,
  ImageSkeleton,
  TitleSkeleton,
  TypesContainerSkeleton,
  TypeSpanCardSkeleton,
} from "./style"

function SkeletonCards() {
  return (
    <CardContainerSkeleton>
      <ImageSkeleton>
        <Skeleton width={200} height={200} />
      </ImageSkeleton>
      <DescriptionContainerSkeleton>
        <IdSkeleton>
          <Skeleton />
        </IdSkeleton>
        <TitleSkeleton>
          <Skeleton />
        </TitleSkeleton>
      </DescriptionContainerSkeleton>
      <TypesContainerSkeleton>
        <TypeSpanCardSkeleton>
          <Skeleton />
        </TypeSpanCardSkeleton>
        <TypeSpanCardSkeleton>
          <Skeleton />
        </TypeSpanCardSkeleton>
      </TypesContainerSkeleton>
    </CardContainerSkeleton>
  )
}

export default SkeletonCards
