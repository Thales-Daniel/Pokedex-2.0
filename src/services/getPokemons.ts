/* eslint-disable no-console */

import axios from "axios"

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

export const getByPokeType = async (type: string) => {
  try {
    const lowerType = type.toLocaleLowerCase()
    const url = `https://pokeapi.co/api/v2/type/${lowerType}`
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    console.error(err)
  }
}

export const getPokemons = async () => {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    console.error(err)
  }
}

export const getTypesDetails = async (type: string) => {
  try {
    const url = `https://pokeapi.co/api/v2/type/${type}`
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    console.error(err)
  }
}
