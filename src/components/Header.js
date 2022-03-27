import {React, useEffect} from "react"
import NavBar from "./NavBar"
const Header = (props)=> {

    
    

    return (
        <header className="p-3 bg-dark text-white shadow-lg p-3 mb-5 rounded">
            <div className="container "> 
                <NavBar estado={props.estado} />
            </div>
        </header>
    )
}
export default Header

