import { ReactNode } from "react"

export type ProviderProps = {
  children: ReactNode
}

export type ContextType = {
  setFilterName: (_modal: string) => void
  filterName: string
}
