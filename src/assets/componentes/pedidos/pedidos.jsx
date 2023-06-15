import { useState,useEffect } from "react"
import './pedidos-module.css';

export const Pedidos = () => {

  const url = 'https://fakestoreapi.com/carts'
  const [pedidos, setPedidos] = useState()

  const fetchApi = async () => {

    const respuesta = await fetch(url)
    console.log(respuesta)

    const respuestaJson =  await respuesta.json()
    setPedidos(respuestaJson)
    console.log(respuestaJson)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return(
      <>

      <h1 className="cantidad">Cantidad de pedidos: {pedidos? pedidos.length: "cargando..."}</h1>

      <ul>
        {pedidos?.map((pedido)=>{
          return(<div className="contenedorInformacion" key={pedido.id}>Usuario : {pedido.userId} Fecha de pedido : {pedido.date}</div>)
        })}
      </ul>

    </>
    )
}