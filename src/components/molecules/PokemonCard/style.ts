import { Link } from "react-router-dom"
import styled from "styled-components"

export const PokeCard = styled.button`
  width: 20rem;
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
  height: 19rem;
  width: 19rem;
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

export const DetailsLink = styled(Link)`
  text-decoration: none;
`
