import styled from "styled-components"

// import TypeAndIcons from "../../shared/utils/TypeAndIcons"

export const PokeTypesUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 3.125rem 3.125rem 0 0;
  gap: 0.9375rem;
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
