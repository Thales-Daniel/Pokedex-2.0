import React from "react"

import Footer from "../../components/organism/Footer"
import Header from "../../components/organism/Header"
import PokemonList from "../../components/templates/PokemonList"
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
