import React from "react"
import { SkeletonTheme } from "react-loading-skeleton"

import { ModalProvider } from "./contexts/ModalContext"
import Router from "./router/Router"

function App() {
  return (
    <ModalProvider>
      <SkeletonTheme>
        <Router />
      </SkeletonTheme>
    </ModalProvider>
  )
}

export default App
