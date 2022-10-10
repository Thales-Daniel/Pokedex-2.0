/* eslint-disable no-console */

import axios from "axios"

export const getPokemons = async (page: number) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getPokemonByName = async (poke: string) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${poke}`
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    console.error(err)
  }
}
