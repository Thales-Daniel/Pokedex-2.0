import styled from "styled-components"

export const InputContainer = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px 0;
`
export const PokeInput = styled.input`
  border-radius: 4px;
  outline: none;
  border: solid gray 1px;
  width: 200px;
  height: 35px;
  padding: 5px;
  font-size: large;
`
export const Label = styled.label`
  flex-wrap: wrap;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 15px;
`

export const PokeDropbox = styled.select`
  flex-wrap: wrap;
  border-radius: 4px;
  outline: none;
  background-color: #ffff;
  width: 150px;
  height: 35px;
  padding: 5px;
  font-size: medium;
`
