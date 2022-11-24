import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Details from "../pages/details"

import Home from "../pages/Home"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
