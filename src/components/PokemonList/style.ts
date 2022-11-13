import styled from "styled-components"

export const PokeContainer = styled.div`
  display: flex;
`

export const PokeContainerMain = styled.main`
  align-items: center;
  max-width: 64rem;
  min-height: calc(4.6875rem - 12.4688rem + 100vh);
  display: flex;
  border-left: solid #f2f2f2 0.0625rem;
  background-color: #ffff;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
`

export const PokeList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  justify-content: flex-start;
  width: 85.49%;
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
  margin: 3.4375rem 0 3.125rem 0;
  padding: 0.75em 1.25em 0.675em;
  width: 12.5rem;
`
