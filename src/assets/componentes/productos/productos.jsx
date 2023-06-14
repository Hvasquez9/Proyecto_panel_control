import { useState,useEffect } from "react"
import './productos-module.css';


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

    <h1 className="titulo">Cantidad de productos: {products? products.length: "cargando..."}</h1>

    {products?.map((product)=>{
      return (
        <div className="products" key={product.id}>
          <div className="card">

            <figure className="imagen"><img src={product.image} ></img></figure>

            <div className="descripcion">
              <h3>{product.title}</h3>
              <p className="precio">$ {product.price}</p>
              <button>Añadir al carrito</button>
            </div>

          </div>
        </div>
      )
    })}

    </>
  )
  
}
