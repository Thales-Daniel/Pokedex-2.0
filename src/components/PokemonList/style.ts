import styled from "styled-components"

export const PokeContainer = styled.section`
  align-items: center;
  width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`
export const PokeList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  width: 85.49%;
`

export const PokeButton = styled.button`
  background-color: #30a7d7;
  border-radius: 5px;
  border: none;
  color: #ffff;
  cursor: pointer;
  height: 2rem;
  margin: 15px 0;
  padding: 0.75em 1.25em 0.675em;
  width: 12.5rem;
`

export const NoPokeContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 80%;
  border: solid #f31a1a 1px;
  gap: 15px;
  padding: 22px;
  border-radius: 8px;

  & h2 {
    color: #f31a1a;
  }

  & h3 {
    color: #919191;
  }

  & li {
    margin-left: 20px;
    color: #9193ad;
  }
`
