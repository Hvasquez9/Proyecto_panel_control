import React, { useState, useEffect } from 'react';
export const MasVendidos = () => {

    const [productosMasVendidos, setProductosMasVendidos] = useState([]);

    useEffect(() => {
  
 
        fetch('https://fakestoreapi.com/products')   
        .then(response => response.json())  
        .then(data => {
              
             
        // Ordenar los productos por cantidad vendida de mayor a menor
              
             
        const productosOrdenados = data.sort((a, b) => b.rating.count - a.rating.count);

        const nombresProductosMasVendidos = productosOrdenados.slice(0, 5).map(producto => ({
        
            id: producto.id,
           title: producto.title
        }));
      
       setProductosMasVendidos(nombresProductosMasVendidos);
    }, [])

})


    return(
        <>
        <h2>Productos más vendidos:</h2>
        <ul>
            {productosMasVendidos.map(producto => (
             <li key={producto.id}>{producto.title}</li>
            ))}
        </ul>
        </>
    )
}