import{React,useEffect,useState} from "react"

import { useContext } from "react";
import { contexto } from "./CartContext";

import { Link} from "react-router-dom";


const Carrito = ()=> {


    const context=useContext(contexto)

    const lista=context.carrito
    
    const total=context.total

    const [b,setBorrar]=useState()

    function borrar(id){
        console.log("eo")
    }

    useEffect(()=>{
        console.log(b)
    },[b]);




    return (
        <>
            {lista.map((item)=>{
                    return(<>
                        <div className="row d-flex justify-content-center mt-4" key={item.producto.id}>
                            <div className="col-6 border border-1 rounded-2 border-info">
                            <Link id="link-detalle"to={`/producto/${item.producto.id}`}><h1 className="p-3"> {item.producto.title}</h1></Link>
                                <div className="d-flex">
                                    <h4>Cantidad:</h4>
                                    <p className="mx-3 pt-2 pb-2">{item.cantidad}</p>
                                </div>
                                <button id={item.producto.id} onClick={context.borrar}>Eliminar</button>
                                
                            </div>

                            <div className="col-2">
                                <h4>Soy el otro lado</h4>
                                
                            </div>
                           
                        </div>
                         </>
                    )
            })}

            <button onClick={context.clear}>Vaciar carrito</button>     
          
        </> 
        
    )
}
export default Carrito