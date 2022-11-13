import styled from "styled-components"

const NoPokeContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-width: 61rem;
  margin: 20px;
  border: solid #f31a1a 0.0625rem;
  gap: 0.9375rem;
  padding: 1.375rem;
  border-radius: 0.5rem;

  & h2 {
    color: #f31a1a;
  }

  & h3 {
    color: #919191;
  }

  & li {
    margin-left: 1.25rem;
    color: #9193ad;
  }
`
export default NoPokeContainer
