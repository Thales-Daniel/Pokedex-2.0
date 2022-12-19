import React, { useContext, useState } from "react"

import typesPokemons from "../../../shared/utils/arrayOfTypes"
import TypeAndIcons from "../../../shared/utils/TypeAndIcons"
import { PropsTypeFilter } from "../../../shared/types/pokemonType"
import { PokeTypesUl, PokeTypeLi, PokeTypeLiNoActivy } from "./style"
import { FilterPokeContext } from "../../../contexts/FilterPokeContext"

function TypeFilter({ setFilterType }: PropsTypeFilter) {
  const [color, setColor] = useState("#2C6AC1")
  const [filterColor, setFilterColor] = useState("All")

  const { setFilterName } = useContext(FilterPokeContext)

  const handleClick = (type: string) => {
    setFilterName("")
    setFilterColor(type)
    setFilterType(type)
    setColor(TypeAndIcons[type.toLocaleLowerCase()].color)
  }

  return (
    <PokeTypesUl>
      {typesPokemons.map((type: string) =>
        filterColor !== type ? (
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
