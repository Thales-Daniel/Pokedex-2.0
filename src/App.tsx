import React from "react"
import { SkeletonTheme } from "react-loading-skeleton"
import Router from "./router/Router"

function App() {
  return (
    <SkeletonTheme>
      <Router />
    </SkeletonTheme>
  )
}

export default App
