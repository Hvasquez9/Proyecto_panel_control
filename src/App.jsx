import React from "react"
import { PanelControl } from "./assets/componentes/panel/panel"
import { Productos } from "./assets/componentes/productos/productos"
import { Pedidos } from "./assets/componentes/pedidos/pedidos"
import { Home } from "./assets/componentes/home/home"

import { Routes,Route } from "react-router-dom"

export const App = () => {
  
  return (
    <>
      <PanelControl></PanelControl>

      <Routes>
        <Route path="/Home" element = {<Home></Home>}></Route>
        <Route path="/Productos" element = {<Productos></Productos>}></Route>
        <Route path="/Pedidos" element = {<Pedidos></Pedidos>}> </Route>
      </Routes>

  
    </>
  )
}

export default App
