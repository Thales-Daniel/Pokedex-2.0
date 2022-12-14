import React, { useState } from "react"

import lupa from "../../../shared/images/lupa.png"
import {
  InputContainer,
  Label,
  PokeInput,
  PokeButtonSearch,
  ImagemSearch,
} from "./style"

type Props = {
  setName: (_name: string) => void
}

function InputFilter({ setName }: Props) {
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
    </InputContainer>
  )
}

export default InputFilter
