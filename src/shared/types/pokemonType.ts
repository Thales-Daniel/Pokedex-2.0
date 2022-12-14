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

export type PokemonStatsType = {
  base_stat: number
  stat: {
    name: string
    url: string
  }
}

export type PokemonType = {
  name?: string
  url: string
  pokemon?: PokemonElement
}

type Ability = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
}

export type PokemonDetails = {
  weight: number
  height: number
  base_experience: number
  abilities: Ability[]
  name: string
  id: number
  sprites: SpriteType
  types: PokemonDetailsElements[]
  stats: PokemonStatsType[]
}

export type PropsTypeFilter = {
  setFilterType: (_filterType: string) => void
}

export type TypesDetailsProps = {
  types: PokemonDetailsElements[]
}
