import styled from "styled-components"

import bgImage from "../../../shared/images/container_bg.png"
import { colors } from "../../../shared/styles/GlobalStyles"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #fff url(${bgImage});
`

export const ContentContainer = styled.div`
  display: flex;
  background-color: ${colors.white};
  width: 75%;
  padding: 2.5rem 0;
  gap: 1.5625rem;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
`

export default Main
