import React, { createContext, useMemo, useState } from "react"

import { ContextType, ProviderProps } from "../shared/types/contextTypes"

export const FilterPokeContext = createContext<ContextType>({} as ContextType)

export function FilterPokeProvider({ children }: ProviderProps) {
  const [filterName, setFilterName] = useState("")

  const context = useMemo(
    () => ({
      filterName,
      setFilterName,
    }),
    [filterName, setFilterName]
  )
  return (
    <FilterPokeContext.Provider value={context}>
      {children}
    </FilterPokeContext.Provider>
  )
}
