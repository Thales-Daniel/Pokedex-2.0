/* eslint-disable no-console */

import axios from "axios"

export const getPokemons = async (limit: number) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getPokeByUrl = async (url: string) => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    console.log(err)
    return err
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
