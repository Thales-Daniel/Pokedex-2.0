import styled from "styled-components"

const BarDiv = styled.div<{ width: string }>`
  align-items: center;
  background-color: #3d5fb4;
  border-radius: 3px;
  color: #ffff;
  min-width: 0.625rem;
  font-size: small;
  display: flex;
  padding: 2px;
  height: 1rem;
  width: ${(props) => props.width};
`

export default BarDiv
