import {React,useState,useEffect} from "react"
import { Link} from "react-router-dom";




const ItemCount=(props)=>{
    const estado=props.state
    var stock= props.max
    const setEstado=props.onAdd
    
    const [estado_bajo, setState]=useState(1)
    const [max,setMax]=useState(false)
    const [cantidad,setCantidad]=useState(0)
    const [almacen,setAl]=useState(props.max)
    
    const Sumar=()=>{
        
        if(estado_bajo<stock){
            setCantidad(cantidad+1)
            setState(estado_bajo+1)
            
        }
        
        
    }

    const Restar=()=>{

        if (estado_bajo>1){
            setState(estado_bajo-1)
            setCantidad(cantidad-1);
        }
    }
    const Eliminar=()=>{
        setState(0)   
        setEstado(0)
        setCantidad(-1)
        setAl(props.max)
    }

    const Agregar=()=>{
        if(almacen>=estado_bajo){
            setEstado(estado+estado_bajo)
            
            
            setAl(almacen-estado_bajo)
            console.log(cantidad+1)
            
        }else{     
            setEstado(estado+stock-estado_bajo)
            setMax(true)
            alert("Se ha añadido lo maximo posible debido a la falta de stock. Le ruego compruebe la cantidad final.(Esto se cambiara por una 'alerta' dentro del contador)")
            //setMax(true)
            
        }
    }
    useEffect(()=>{
        setCantidad(cantidad+estado_bajo)


    },[estado]);
    

    
    if(max){    
            return(<h3>No queda stock</h3>)
    }
    else{
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
                        <button id="agregar" onClick={Agregar}>Añadir</button>
                    </div>
                    <button id="alcarro"><Link id="allink"to="/carrito">Vamos al carrito</Link></button>
                    
                </div>
            </>)
}
}

export default ItemCount