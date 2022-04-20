import {React,useEffect,useState} from "react"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";

const NavBar=(props)=> {
    
    const [vacio,setVacio]=useState(true)
    useEffect(()=>{
        
        if(props.estado==0){
            setVacio(true)
           
        }else{
            setVacio(false)
            
        }
    }
        ,
        [props.estado]
    )

    if(!vacio){
            return (<>
                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
                                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-2">
                                        <li> <NavLink to="/" className='nav-link px-2 text-white'>E-Commerce</NavLink></li>
                                        <li> <NavLink to="/categoria/ropa_hombre" className='nav-link px-2 text-white'>Ropa de hombre</NavLink></li>
                                        <li> <NavLink to="/categoria/ropa_mujer" className='nav-link px-2 text-white'>Ropa de mujer</NavLink></li>
                                    </ul>
                                
                                <li className="d-flex"> <Link to="/cart" className=""><CartWidget/></Link><p className="mt-2 ms-2">{props.estado}</p></li>
                            </div>
            </>)
    }else {
        return(<>
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
                                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-2">
                                            <li> <NavLink to="/" className='nav-link px-2 text-white'>E-Commerce</NavLink></li>
                                            <li> <NavLink to="/categoria/ropa_hombre" className='nav-link px-2 text-white'>Ropa de hombre</NavLink></li>
                                            <li> <NavLink to="/categoria/ropa_mujer" className='nav-link px-2 text-white'>Ropa de mujer</NavLink></li>
                                        </ul>
                                    
            </div>

            
        
        </>)

        
    }
}
export default NavBar