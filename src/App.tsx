import React from "react"
import { SkeletonTheme } from "react-loading-skeleton"

import { FilterPokeProvider } from "./contexts/FilterPokeContext"
import Router from "./router/Router"

function App() {
  return (
    <FilterPokeProvider>
      <SkeletonTheme>
        <Router />
      </SkeletonTheme>
    </FilterPokeProvider>
  )
}

export default App
