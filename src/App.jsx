import React from "react"
import { PanelControl } from "./assets/componentes/panel/panel"
import { Productos } from "./assets/componentes/productos/productos"
import { Pedidos } from "./assets/componentes/pedidos/pedidos"
import { Promedio } from "./assets/componentes/promedio/promedio"
import { Ingresos } from "./assets/componentes/ingresos_totales/ingresos"
import { MasVendidos } from "./assets/componentes/product_mas_vendidos/producto_mas_vendido"
import { Routes,Route } from "react-router-dom"

export const App = () => {
  
  return (
    <>
      <PanelControl></PanelControl>

      <Routes>
        <Route path="/Productos" element = {<Productos></Productos>}></Route>
        <Route path="/Pedidos" element = {<Pedidos></Pedidos>}> </Route>
        <Route path="/Ingresos" element = {<Ingresos></Ingresos>}> </Route>
        <Route path="/Promedio" element = {<Promedio></Promedio>}> </Route>
        <Route path="/Mas_vendido" element = {<MasVendidos></MasVendidos>}> </Route>
      </Routes>

  
    </>
  )
}

export default App
