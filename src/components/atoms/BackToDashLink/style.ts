import styled from "styled-components"
import { Link } from "react-router-dom"

import { colors } from "../../../shared/styles/GlobalStyles"

const StyledLink = styled(Link)`
  align-items: center;
  background-color: ${colors["blue-light"]};
  border-radius: 0.375rem;
  color: ${colors.white};
  display: flex;
  font-size: large;
  height: 2.5rem;
  justify-content: center;
  text-decoration: none;
  width: 11rem;
`

export default StyledLink
