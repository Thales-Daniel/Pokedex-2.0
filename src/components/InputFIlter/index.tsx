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

  const HandleSubmit = (event: any) => {
    event.preventDefault()
    setName(inputValue)
  }

  return (
    <InputContainer>
      <Label>
        <PokeInput
          value={inputValue}
          type="text"
          placeholder="Find Your Pokemon"
          onChange={({ target }) => setInputValue(target.value)}
        />
        <PokeButtonSearch
          type="submit"
          onClick={(event) => HandleSubmit(event)}
        >
          <ImagemSearch src={lupa} alt="lupa" />
        </PokeButtonSearch>
      </Label>
      <Label htmlFor="select">
        Type:
        <PokeDropbox
          onChange={(event) => setType(event.target.value)}
          defaultValue="All"
        >
          <option>All</option>
          {typesPokemons.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </PokeDropbox>
      </Label>
    </InputContainer>
  )
}

export default InputFilter
