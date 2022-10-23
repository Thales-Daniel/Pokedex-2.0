import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PokemonList from "../../components/PokemonList"
import Main from "./style"

function Home() {
  return (
    <>
      <Header />
      <Main>
        <PokemonList />
      </Main>
      <Footer />
    </>
  )
}

export default Home
