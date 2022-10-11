export type PokemonType = {
  name?: string
  url: string
}

interface SpriteType {
  other: {
    "official-artwork": {
      front_default: string
    }
  }
}

type PokemonElement = {
  name: string
  url: string
}

export type PokemonDetails = {
  name: string
  id: number
  sprites: SpriteType
  types: PokemonElement[]
}
