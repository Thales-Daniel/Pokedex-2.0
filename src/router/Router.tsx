import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Details from "../pages/Details"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pokemon/:poke" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
