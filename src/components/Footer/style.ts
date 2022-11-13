import styled from "styled-components"

export const PokeFooter = styled.footer`
  display: flex;
  width: 100%;
  margin-top: 30px;
  background-color: #3d5fb4;
  color: #ffff;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 0;

  & p {
    font-size: medium;
  }

  & span {
    font-size: x-small;
  }

  & a {
    color: #ffff;
    padding: 0.3125rem;
  }
`

export const ContainerIcons = styled.div`
  margin: 0 1.875rem 0 1.875rem;
  padding: 0.3125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const CurriculunContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;

  & img {
    width: 23px;
    height: 23px;
  }
`
