import styled from "styled-components"

export const PokeFooter = styled.footer`
  display: flex;
  width: 100%;
  margin-top: 30px;
  background-color: #3d5fb4;
  color: #ffff;
  height: fit-content;
  justify-content: space-around;
  align-items: center;
  position: relative;
  bottom: 0;

  & p {
    font-size: medium;
  }

  & span {
    font-size: small;
  }

  & div {
    padding: 0.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & a {
    color: #ffff;
    padding: 0.3125rem;
  }
`

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
