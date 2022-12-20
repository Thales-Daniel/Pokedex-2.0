import styled from "styled-components"

import { colors } from "../../../shared/styles/GlobalStyles"

const CloseButton = styled.button`
  align-items: center;
  background-color: ${colors.black};
  border-radius: 0 8px 0 8px;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  font-size: medium;
  font-weight: bold;
  height: 2.5rem;
  justify-content: center;
  width: 90px;
`

export default CloseButton
