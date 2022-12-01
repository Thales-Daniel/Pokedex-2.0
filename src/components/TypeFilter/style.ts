import styled from "styled-components"

export const PokeTypesUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.625rem 4rem;
  margin-right: 4rem;
  flex-wrap: wrap;
  border-right: solid #f2f2f2 0.0625rem;
  gap: 0.9375rem;
  position: relative;
`

export const PokeTypeLiNoActivy = styled.label`
  list-style: none;
  display: flex;
  gap: 10px;
  cursor: pointer;
  color: ${(props) => props.theme};
`

export const PokeTypeLi = styled.label`
  display: flex;
  filter: grayscale(100%);
  gap: 10px;
  list-style: none;
  cursor: pointer;
  color: gray;
`
