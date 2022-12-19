import styled from "styled-components"

export const ContainerWithNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  background-color: #a4a4a4;
  border-radius: 5px;
  gap: 5px;
`

export const StatsBarContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  gap: 10px;
`

export const NameStat = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: small;
`
