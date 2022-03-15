import React from "react"
import {useState} from "react"




const ItemCount=(props)=>{
    const estado=props.state
    const stock= props.max
    const setEstado=props.funcion
    
    const [estado_bajo, setState]=useState(1)
    
    const Sumar=()=>{
        
        if(estado_bajo<stock){
            setState(estado_bajo+1)
        }
    }
    
    
    const Restar=()=>{

        if (estado_bajo>1){
            setState(estado_bajo-1)
        }
    }
    const Eliminar=()=>{
        setState(0)   
        setEstado(0)
    }

    const Agregar=()=>{
        if(stock>=(estado+estado_bajo)){
            setEstado(estado+estado_bajo)
        }else{
            setEstado(stock)
            alert("Se ha añadido lo maximo posible debido a la falta de stock. Le ruego compruebe la cantidad final.(Esto se cambiara por una 'alerta' dentro del contador)")
        }
    }


    
    
    return(<>

        <div id="itemCount-container">
            <div id="contador-container">
                <button id="controlador" onClick={(Restar)}>-</button>
                <div id="numero">
                    <p>{estado_bajo}</p>
                </div>                             
                <button id="controlador" onClick={(Sumar)}>+</button>                
                
                
            </div>
            <div id="boton-container">
                <button id="eliminar" onClick={(Eliminar)}>Eliminar</button>
                <button id="agregar" onClick={(Agregar)}>Añadir</button>
            </div>
        </div>
        
        </>
    )
}

export default ItemCount