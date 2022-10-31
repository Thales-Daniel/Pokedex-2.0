import styled from "styled-components"

export const PokeContainer = styled.section`
  align-items: center;
  width: 64rem;
  min-height: calc(75px - 199.5px + 100vh);
  display: flex;
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
  background-color: #30a7d7;
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
