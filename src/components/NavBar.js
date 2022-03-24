import React from "react"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";

const NavBar=(props)=> {
    return (<>
       
       
                    
                    
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-2">
                                <li> <NavLink to="/" className='nav-link px-2 text-white'>E-Commerce</NavLink></li>
                                <li> <NavLink to="/categoria/electronics" className='nav-link px-2 text-white'>Tecnologia</NavLink></li>
                                <li> <NavLink to="/categoria/jewelery" className='nav-link px-2 text-white'>Joyas</NavLink></li>
                                <li> <NavLink to="/categoria/men's clothing" className='nav-link px-2 text-white'>Ropa de hombre</NavLink></li>
                                <li> <NavLink to="/categoria/women's clothing" className='nav-link px-2 text-white'>Ropa de mujer</NavLink></li>
                            </ul>
                        


                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"></input>
                        </form>

                        <div className="text-end d-flex">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning me-4">Sign-up</button>
                        <li className="d-flex"> <Link to="/cart" className=""><CartWidget/></Link><p className="mt-2 ms-2">{props.estado}</p></li>
                        </div>
                    
                    </div>
  


    </>)
}
export default NavBar