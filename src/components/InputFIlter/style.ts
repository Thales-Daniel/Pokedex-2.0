import styled from "styled-components"

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px 0;
  width: 100%;
`
export const PokeInput = styled.input`
  border-radius: 4px;
  outline: none;
  border: solid gray 1px;
  width: 100%;
  height: 35px;
  padding: 0 15px;
  font-size: large;
`
export const Label = styled.label`
  font-size: medium;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const PokeDropbox = styled.select`
  background-color: #ffff;
  border-radius: 4px;
  flex-wrap: wrap;
  font-size: medium;
  height: 35px;
  outline: none;
  padding: 5px;
  width: 150px;
`
export const PokeButtonSearch = styled.button`
  height: fit-content;
  padding: 5px 10px;
  border: none;
  outline: none;
  width: fit-content;
  border-radius: 8px;
`
export const ImagemSearch = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`
