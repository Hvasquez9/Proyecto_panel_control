import React from 'react';
import { Link } from 'react-router-dom';
import './panel-module.css';




export const PanelControl = () =>{



    return(
        <>
        <nav>
            <Link to={"/"}>
                <img className='imagen' src="https://innokabi.com/wp-content/uploads/2020/07/C%C3%B3mo-crear-tienda-online-Innokabi-Blog.jpg" alt="" />
            </Link>

           <ul className='nav_list'>
            <Link to={"/Productos"}>
               <button>Productos</button>
            </Link>

            <Link to={"/Pedidos"}>
                <button>Pedidos</button>
            </Link>

            <Link to={"/Ingresos"}>
                <button>Ingresos totales</button>
            </Link>

            <Link to={"/Promedio"}>
                <button>Precio promedio</button>
            </Link>

            <Link to={"/Mas_vendido"}>
                <button>Mas vendidos</button>
            </Link>
           </ul>
        </nav>
        </>
    )
}