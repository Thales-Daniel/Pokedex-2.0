import React from "react"

import pokeballImage from "../../shared/images/pokeLogo.png"
import ImageLoader from "./style"

function Loader() {
  return (
    <div>
      <ImageLoader src={pokeballImage} alt="" />
    </div>
  )
}

export default Loader
