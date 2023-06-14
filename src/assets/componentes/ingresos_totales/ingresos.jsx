import React, { useState, useEffect } from 'react';

export const Ingresos = () => {

    const [carrito, setCarrito] = useState([]);
    const [ingresosTotales, setIngresosTotales] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {setCarrito(data);})
            
    },[])

    useEffect(() => {
        const ingresos = carrito.reduce((total, producto) => total + producto.price, 0);
        setIngresosTotales(ingresos);
    }, [carrito]);
        
        
          
    
    return(
        <>
        <h1>Ingresos totales: ${ingresosTotales}</h1>
        </>
    )
}