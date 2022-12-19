export type ContainerAbilityTypes = {
  title: string
  value: { ability: { name: string; url: string }; is_hidden: boolean }[]
  setOpenAbility: (_openAbility: string) => void
}

export type OpenAbilityButtonTypes = {
  setOpenAbility: (_ability: string) => void
  abilityName: string
}
