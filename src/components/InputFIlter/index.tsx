import React from "react"

import { InputContainer, Label, PokeDropbox, PokeInput } from "./style"
import typesPokemons from "../../shared/utils/arrayOfTypes"

function InputFilter() {
  return (
    <InputContainer>
      <Label>
        Nome:
        <PokeInput type="text" placeholder="Ache seu Pokemon" />
      </Label>
      <Label>
        Type:
        <PokeDropbox>
          {typesPokemons.map((type) => (
            <option>{type}</option>
          ))}
        </PokeDropbox>
      </Label>
    </InputContainer>
  )
}

export default InputFilter
