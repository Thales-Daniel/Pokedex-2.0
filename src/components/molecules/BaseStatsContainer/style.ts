import styled from "styled-components"

export const ContainerWithNameDiv = styled.div`
  background-color: #a4a4a4;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 5px;
  padding: 0.625rem;
  width: 28rem;
`

export const StatsBarContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  gap: 0.625rem;
`

export const NameStat = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: small;
`
