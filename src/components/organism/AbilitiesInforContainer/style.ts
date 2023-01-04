import styled from "styled-components"

import { colors } from "../../../shared/styles/GlobalStyles"

export const AbilitiesInforDiv = styled.div`
  background-color: ${colors["black-not-strong"]};
  border-radius: 0.5rem;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 35px;
  font-size: 1.0625rem;
  height: 15.625rem;
  width: 28rem;
`

export const HeaderAbilities = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.25rem;
  height: 2.5rem;
`

export const TitleH4 = styled.h4`
  color: ${colors.gray};
`

export const EffectContainerDiv = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 0 1.25rem;
`

export const EffectTittleH3 = styled.h3``

export const EffectP = styled.p``
