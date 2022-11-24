import styled, { createGlobalStyle } from "styled-components"

import typeCardObject from "../../shared/utils/objectOfTypes"

export const GlobalStyle = createGlobalStyle`

  * {
    font-family: "Saira", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export const PokeSpanTypeCard = styled.span`
  border-radius: 0.1875rem;
  line-height: 1.125rem;
  max-width: 6.875rem;
  margin: 0 1.5625% 0 0;
  width: 38.4375%;
  float: left;
  font-size: 0.6875rem;
  text-align: center;
  background: ${(props) => typeCardObject[props.theme].background};
  color: ${(props) => typeCardObject[props.theme].color};
`
