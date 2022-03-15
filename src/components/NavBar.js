import React from "react"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";

const NavBar=(props)=> {
    return (<>
        <div id="navegacion">
            <div>
            <ul>
                <li><a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" id="icononav" className="icon icon-tabler icon-tabler-search" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </a>
                </li>  
                <li><Link to="/">
                        <h1 className='header__title'>Mi E-Commerce</h1>
                    </Link>
                </li>
                <li> <NavLink to="/categoria/electronics" className='nav__link'>Tecnologia</NavLink></li>
                <li> <NavLink to="/categoria/jewelery" className='nav__link'>Joyas</NavLink></li>
                <li> <NavLink to="/categoria/men's clothing" className='nav__link'>Ropa de hombre</NavLink></li>
                <li> <NavLink to="/categoria/women's clothing" className='nav__link'>Ropa de mujer</NavLink></li>
                <li> <Link to="/carrito"><CartWidget/></Link><p>{props.estado}</p></li>
            </ul>
                
            </div>
        </div>
    </>)
}
export default NavBar