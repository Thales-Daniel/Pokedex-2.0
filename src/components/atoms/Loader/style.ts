import styled, { keyframes } from "styled-components"

const isRotate = keyframes`
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
`
const ImageLoader = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  transform: rotate(1turn);
  animation: ${isRotate} 1.2s infinite;
`

export default ImageLoader
