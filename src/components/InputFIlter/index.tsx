import React, { useState } from "react"

import lupa from "../../shared/images/lupa.png"
import typesPokemons from "../../shared/utils/arrayOfTypes"
import {
  InputContainer,
  Label,
  PokeDropbox,
  PokeInput,
  PokeButtonSearch,
  ImagemSearch,
} from "./style"

type Props = {
  setName: (_name: string) => void
  setType: (_type: string) => void
}

function InputFilter({ setName, setType }: Props) {
  const [inputValue, setInputValue] = useState("")
  return (
    <InputContainer>
      <Label>
        <PokeInput
          value={inputValue}
          type="text"
          placeholder="Ache seu Pokemon"
          onChange={({ target }) => setInputValue(target.value)}
        />
        <PokeButtonSearch type="button" onClick={() => setName(inputValue)}>
          <ImagemSearch src={lupa} alt="lupa" />
        </PokeButtonSearch>
      </Label>
      <Label htmlFor="select">
        Type:
        <PokeDropbox
          onChange={(event) => setType(event.target.value)}
          defaultValue="Todos"
        >
          <option>Todos</option>
          {typesPokemons.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </PokeDropbox>
      </Label>
    </InputContainer>
  )
}

export default InputFilter
