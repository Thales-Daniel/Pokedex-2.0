import styled from "styled-components"

export const InputContainer = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-right: 40px;
`
export const PokeInput = styled.input`
  border-radius: 0.375rem;
  outline: none;
  border: solid gray 0.0625rem;
  width: 100%;
  height: 2rem;
  padding:  0.9375rem;
  font-size: large;
`
export const Label = styled.label`
  align-items: center;
  display: flex;
  font-size: medium;
  gap: 0.625rem;
  position: relative;
`

export const PokeButtonSearch = styled.button`
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  height: fit-content;
  justify-content: center;
  outline: none;
  width: fit-content;
  position: absolute;
  right: 0;
`
export const ImagemSearch = styled.img`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 0 0.375rem 0.375rem 0;
  right: 0;
`
