import styled from "styled-components"

export const PokeContainer = styled.main`
  display: grid;
  grid-template-columns: 0.5fr 3.5fr;
`

export const PokeContainerContent = styled.div`
  align-items: center;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  min-height: calc(4.6875rem - 12.4688rem + 100vh);
  position: relative;
  width: 100%;
`

export const PokeList = styled.ul`
  align-items: flex-start;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  justify-content: flex-start;
`

export const PokeButton = styled.button`
  align-items: center;
  background-color: #3d5fb4;
  border-radius: 0.3125rem;
  border: none;
  color: #ffff;
  cursor: pointer;
  display: flex;
  height: 2rem;
  justify-content: center;
  margin: 3.4375rem 5rem 3.125rem 0;
  padding: 0.75em 1.25em 0.675em;
  width: 12.5rem;
`
