import React, { createContext, useMemo, useState } from "react"

import { ContextType, ProviderProps } from "../shared/types/contextTypes"

export const ModalContext = createContext<ContextType>({} as ContextType)

export function ModalProvider({ children }: ProviderProps) {
  const [modal, setModal] = useState(false)

  const context = useMemo(
    () => ({
      modal,
      setModal,
    }),
    [modal, setModal]
  )
  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  )
}
