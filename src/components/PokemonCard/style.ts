import styled from "styled-components"

import typeCardObject from "../../shared/utils/objectOfTypes"

export const PokeCard = styled.button`
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 10px 51px -5px rgb(183 189 193 / 30%);
  border: none;
  cursor: pointer;
  border-radius: 0.75rem;
`

export const PokeSprite = styled.img`
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
