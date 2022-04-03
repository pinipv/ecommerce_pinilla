import{React,useEffect,useState} from "react"

import { useContext } from "react";
import { contexto } from "./CartContext";

import { Link} from "react-router-dom";

import { db} from "../firebase"
import { serverTimestamp,collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";


const Carrito = (props)=> {


    

    const context=useContext(contexto)

    const lista=context.carrito
    const precio=context.preciofinal

    const terminarCompra=()=>{
        const orden={
            buyer:  {
                nombre:"Adrian",
                telefono:"123454234",
                email:"adri@adrian.com"
            },
            items:lista,
            date: serverTimestamp(),
            total:precio

        }
        const ordenesCollection=collection(db,"ordenes")
        const pedido=addDoc(ordenesCollection,orden)

        pedido
            .then(res=>{
                toast.info("Finalizo la compra")
            })
            .catch(error=>{
                toast.error("hubo un error")
            })
    }


    if(lista.length==0){return(<>
        <h1>No tienes nada aun</h1>
        <button type="button" className="btn btn-sm btn-outline-primary "><Link id="link-detalle"to={`/`}>Seguir comprando</Link></button>
        </>

        )
    }else{
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
                                <button id={item.producto.id} onClick={()=>context.removeItem(item.producto.id,props.onAdd,props.state,item.cantidad,item.producto.price)}>Eliminar</button>
                                
                            </div>

                            <div className="col-2">
                                <h4>Soy el otro lado</h4>
                                
                            </div>
                           
                        </div>
                         </>
                    )
            })}
            <h4>El total por sus productos es de: {precio}</h4>
            <button onClick={()=>context.clear(props.onAdd)}>Vaciar carrito</button>  
            <button onClick={terminarCompra}> Terminar compra</button>     
          
        </> 
        
    )
}
}
export default Carrito