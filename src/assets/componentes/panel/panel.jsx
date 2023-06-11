import React from 'react';
import { Link } from 'react-router-dom';
import './panel-module.css';


export const PanelControl = () =>{



    return(
        <>
        <nav>
            <Link to={"/"}>
                <h2>Logo</h2>
            </Link>

           <ul className='nav_list'>
           <Link to={"/Home"}>
               <li>Home</li>
            </Link>

            <Link to={"/Productos"}>
               <li>Productos</li>
            </Link>

            <Link to={"/Pedidos"}>
                <li>Pedidos</li>
            </Link>
           </ul>
        </nav>
        </>
    )
}