import { useState,useEffect } from "react"

export const Promedio = () => {
    const [suma, setSuma] = useState(0);
    const [cantidadProductos, setCantidadProductos] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {setCantidadProductos(data.length);          
        setSuma(data.reduce((total, producto) => total + producto.price, 0));
        })
          
    },[])
        

    return(
        <>
         <h1>Precio promedio de los productos: {cantidadProductos > 0 ? suma / cantidadProductos : 0}</h1>
        </>
    )
}