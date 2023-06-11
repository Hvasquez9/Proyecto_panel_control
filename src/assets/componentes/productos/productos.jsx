import { useState,useEffect } from "react"

export const Productos = () => {
  const url = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState()

  const fetchApi = async () => {

    const respuesta = await fetch(url)
    console.log(respuesta)

    const respuestaJson =  await respuesta.json()
    setProducts(respuestaJson)
    console.log(respuestaJson)

  }

  useEffect(() => {
    fetchApi()
  }, [])
  
  
  return(
    <>
    <h1>Productos</h1>
    <ul>
    {! products? 'cargando...' : products.map((products,index)=>{
      return <> <li>{products.title}</li>
      <li>{products.price}</li>
      </>
    })}
    </ul>
    </>
  )
  
}
