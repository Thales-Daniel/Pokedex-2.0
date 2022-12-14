import styled from "styled-components"

export const PokeTypesUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.625rem 4rem;
  flex-wrap: wrap;
  border-right: solid #f2f2f2 0.0625rem;
  gap: 0.9375rem;
  position: relative;
`

export const PokeTypeLiNoActivy = styled.label`
  list-style: none;
  display: flex;
  gap: 0.625rem;
  cursor: pointer;
  color: ${(props) => props.theme};

  img {
    width: 1.5rem;
  }
`

export const PokeTypeLi = styled.label`
  display: flex;
  filter: grayscale(100%);
  gap: 0.625rem;
  list-style: none;
  cursor: pointer;
  color: gray;

  img {
    width: 1.3rem;
  }
`
