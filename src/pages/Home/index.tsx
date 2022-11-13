import React from "react"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PokemonList from "../../components/PokemonList"
import { Main, Container } from "./style"

function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <PokemonList />
      </Main>
      <Footer />
    </Container>
  )
}

export default Home
