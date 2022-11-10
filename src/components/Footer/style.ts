import styled from "styled-components"

const PokeFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #1f1f1f;
  color: #ffff;
  height: fit-content;
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

  & div {
    padding: 0.3125rem;
  }

  & a {
    color: #ffff;
    padding: 0.3125rem;
  }
`

export default PokeFooter
