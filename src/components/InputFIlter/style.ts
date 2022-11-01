import styled from "styled-components"

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 3.125rem 0;
  width: 80%;
`
export const PokeInput = styled.input`
  border-radius: 0.25rem;
  outline: none;
  border: solid gray 0.0625rem;
  width: 100%;
  height: 2.1875rem;
  padding: 0 0.9375rem;
  font-size: large;
`
export const Label = styled.label`
  align-items: center;
  display: flex;
  font-size: medium;
  gap: 0.625rem;
`

export const PokeButtonSearch = styled.button`
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  height: fit-content;
  justify-content: center;
  outline: none;
  padding: 0.5rem;
  width: fit-content;
`
export const ImagemSearch = styled.img`
  cursor: pointer;
  height: 1.25rem;
  width: 1.25rem;
`
