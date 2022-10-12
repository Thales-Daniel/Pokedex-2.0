import { Link } from "react-router-dom"
import styled from "styled-components"

export const PokeCard = styled(Link)`
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

export const PokeSprite = styled.img`
  background-color: #f2f2f2;
  border-radius: 8px;
  width: 100%;
`

export const PokeId = styled.p`
  color: #919191;
  font-size: 90%;
  font-weight: bold;
  padding: 5px;
`

export const PokeTittle = styled.h1`
  color: #000;
  margin: 10px 0;
`
