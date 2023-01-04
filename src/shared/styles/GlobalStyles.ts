import styled, { createGlobalStyle } from "styled-components"

import typeCardObject from "../../shared/utils/objectOfTypes"
import { colorsType } from "../types/colorsTypes"

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: "Saira", sans-serif;
    margin: 0;
    padding: 0;
  }
`

export const PokeSpanTypeCard = styled.span<{
  fontSize: string
  height: string
}>`
  align-items: center;
  background: ${(props) => typeCardObject[props.theme].background};
  border-radius: 0.1875rem;
  color: ${(props) => typeCardObject[props.theme].color};
  display: flex;
  float: left;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0.6875rem")};
  height: ${(props) => (props.height ? props.height : "")};
  justify-content: center;
  line-height: 1.125rem;
  max-width: 6.875rem;
  width: 38.4375%;
`

export const colors: colorsType = {
  "black-not-strong": "#343338",
  "blue-classic": "#3d5fb4",
  "blue-light": "#30a7d7",
  "gray-border": "#D9D9D9",
  black: "#000",
  gray: "gray",
  green: "green",
  red: "red",
  white: "#FFFFFF",
  whitesmoke: "#f5f5f5",
}
