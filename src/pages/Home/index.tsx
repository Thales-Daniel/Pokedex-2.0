import React from "react"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PokemonList from "../../components/PokemonList"
import { Container } from "./style"

function Home() {
  return (
    <Container>
      <Header />
      <PokemonList />
      <Footer />
    </Container>
  )
}

export default Home
