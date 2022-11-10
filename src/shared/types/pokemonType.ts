interface SpriteType {
  front_default: string
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

export type PokemonDetailsElements = {
  slot: number
  type: {
    name: string
    url: string
  }
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
  types: PokemonDetailsElements[]
}

export type PropsTypeFilter = {
  setFilterType: (_filterType: string) => void
}
