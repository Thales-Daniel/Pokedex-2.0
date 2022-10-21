import styled from "styled-components"

const NoPokeContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 80%;
  border: solid #f31a1a 1px;
  gap: 15px;
  padding: 22px;
  border-radius: 8px;

  & h2 {
    color: #f31a1a;
  }

  & h3 {
    color: #919191;
  }

  & li {
    margin-left: 20px;
    color: #9193ad;
  }
`
export default NoPokeContainer
