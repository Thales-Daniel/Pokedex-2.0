import styled, { createGlobalStyle } from "styled-components"

import typeCardObject from "../../shared/utils/objectOfTypes"

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
