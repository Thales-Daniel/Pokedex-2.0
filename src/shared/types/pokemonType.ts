interface SpriteType {
  other: {
    "official-artwork": {
      front_default: string
    }
  }
}

export type PokemonElement = {
  name: string
  url: string
}

export type PokemonType = {
  name?: string
  url: string
  pokemon?: PokemonElement
}

export type PokemonDetails = {
  name: string
  id: number
  sprites: SpriteType
  types: PokemonElement[]
}
