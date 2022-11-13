import styled from "styled-components"

export const PokeHeader = styled.header`
  width: 100%;
  height: 4rem;
  background-color: rgb(247, 51, 51);
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1.25rem;
`

export const HeaderImage = styled.img`
  width: 3rem;
  height: 100%;
`

export const PokemonLogo = styled.img`
  height: 3rem;
  width: 7rem;
`

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    text-align: center;
    font-size: x-small;
    line-break: none;
    width: 150px;
    color: #ffff;
  }
`
