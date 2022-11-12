import React, { useContext } from "react"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PokemonList from "../../components/PokemonList"
import { ModalContext } from "../../contexts/ModalContext"
import { Main, Container, ContainerModal } from "./style"

function Home() {
  const { modal } = useContext(ModalContext)

  return (
    <div>
      {modal ? (
        <ContainerModal>
          <Header />
          <Main>
            <PokemonList />
          </Main>
          <Footer />
        </ContainerModal>
      ) : (
        <Container>
          <Header />
          <Main>
            <PokemonList />
          </Main>
          <Footer />
        </Container>
      )}
    </div>
  )
}

export default Home
