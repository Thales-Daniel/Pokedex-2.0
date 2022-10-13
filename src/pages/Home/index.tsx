import React from "react"
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
    </>
  )
}

export default Home
