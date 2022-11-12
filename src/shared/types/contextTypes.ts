import { ReactNode } from "react"

export type ProviderProps = {
  children: ReactNode
}

export type ContextType = {
  setModal: (_modal: boolean) => void
  modal: boolean
}
