import { Link } from "react-router-dom"
import styled from "styled-components"

import typeCardObject from "../../shared/utils/objectOfTypes"

export const PokeCard = styled(Link)`
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

export const PokeSprite = styled.img`
  background-color: #f2f2f2;
  border-radius: 8px;
  height: 100%;
  width: 100%;
`
export const PokeDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const PokeId = styled.p`
  color: #919191;
  font-size: 90%;
  font-weight: bold;
  padding: 5px;
`

export const PokeTittle = styled.h3`
  color: #000;
  margin: 10px 0;
`

export const PokeTypeContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: flex-start;
  align-self: flex-start;
`

export const PokeSpanTypeCard = styled.span`
  border-radius: 3px;
  line-height: 18px;
  max-width: 110px;
  margin: 0 1.5625% 0 0;
  width: 38.4375%;
  float: left;
  font-size: 11px;
  text-align: center;
  background: ${(props) => typeCardObject[props.theme].background};
  color: ${(props) => typeCardObject[props.theme].color};
`
