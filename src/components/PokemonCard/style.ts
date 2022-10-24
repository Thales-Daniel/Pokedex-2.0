import { Link } from "react-router-dom"
import styled from "styled-components"

import typeCardObject from "../../shared/utils/objectOfTypes"

export const PokeCard = styled.div`
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`
export const PokeLink = styled(Link)`
  width: 100%;
  height: 100%;
`

export const PokeSprite = styled.img`
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  height: 12.5rem;
  width: 12.5rem;
`
export const PokeDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const PokeId = styled.p`
  color: #919191;
  font-size: 0.625rem;
`

export const PokeTittle = styled.h3`
  color: #000;
  margin: 0.3125rem 0;
`

export const PokeTypeContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.3125rem;
  justify-content: flex-start;
  align-self: flex-start;
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
