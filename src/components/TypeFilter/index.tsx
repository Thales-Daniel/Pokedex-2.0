import React, { useState } from "react"

import typesPokemons from "../../shared/utils/arrayOfTypes"
import { PropsTypeFilter } from "../../shared/types/pokemonType"
import TypeAndIcons from "../../shared/utils/TypeAndIcons"
import { PokeTypesUl, PokeTypeLi, PokeTypeLiNoActivy } from "./style"

function TypeFilter({ setFilterType }: PropsTypeFilter) {
  const [color, setColor] = useState("#2C6AC1")
  const [isActivy, setIsActivy] = useState("All")

  const handleClick = (type: string) => {
    setIsActivy(type)
    setFilterType(type)
    setColor(TypeAndIcons[type.toLocaleLowerCase()].color)
  }

  return (
    <PokeTypesUl>
      {typesPokemons.map((type: string) =>
        isActivy !== type ? (
          <PokeTypeLi
            key={type}
            onClick={() => handleClick(type)}
            theme={color}
          >
            <img
              src={TypeAndIcons[type.toLocaleLowerCase()].src}
              alt={`${type} icon`}
            />
            {type}
          </PokeTypeLi>
        ) : (
          <PokeTypeLiNoActivy key={type} theme={color}>
            <img
              src={TypeAndIcons[type.toLocaleLowerCase()].src}
              alt={`${type} icon`}
            />
            {type}
          </PokeTypeLiNoActivy>
        )
      )}
    </PokeTypesUl>
  )
}

export default TypeFilter
