import styled from "styled-components"

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px 0;
  width: 60%;
`
export const PokeInput = styled.input`
  border-radius: 4px;
  outline: none;
  border: solid gray 1px;
  width: 200px;
  height: 30px;
  padding: 5px;
  font-size: large;
`
export const Label = styled.label`
  flex-wrap: wrap;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const PokeDropbox = styled.select`
  background-color: #ffff;
  border-radius: 4px;
  flex-wrap: wrap;
  font-size: medium;
  height: 30px;
  outline: none;
  padding: 5px;
  width: 150px;
`
export const PokeButtonSearch = styled.button`
  height: 20px;
  border: none;
  outline: none;
  width: 20px;
`
export const ImagemSearch = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: #ffff;
`
