import styled from "styled-components"

const BarDiv = styled.div<{ width: string }>`
  align-items: center;
  background-color: #3d5fb4;
  border-radius: 0.3125rem;
  color: #ffff;
  min-width: 1.25rem;
  font-size: 1.2vw;
  display: flex;
  padding: 0.3125rem;
  height: 1.25rem;
  width: ${(props) => props.width};
`

export default BarDiv
