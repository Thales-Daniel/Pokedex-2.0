import styled from "styled-components"

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 50px 0;
  width: 80%;
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
  align-items: center;
  display: flex;
  font-size: medium;
  gap: 10px;
`

export const PokeDropbox = styled.select`
  align-self: center;
  background-color: #ffff;
  border-radius: 4px;
  display: flex;
  font-size: medium;
  height: 35px;
  justify-content: center;
  outline: none;
  padding: 5px;
  width: 150px;
`
export const PokeButtonSearch = styled.button`
  align-items: center;
  border-radius: 8px;
  border: none;
  display: flex;
  height: fit-content;
  justify-content: center;
  outline: none;
  padding: 8px;
  width: fit-content;
`
export const ImagemSearch = styled.img`
  cursor: pointer;
  height: 20px;
  width: 20px;
`
