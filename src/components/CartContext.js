import {createContext, useState} from 'react'



export const contexto=createContext()

const { Provider } = contexto

const MiProvider=({children})=>{

    const [carrito,setCarrito]=useState([])
    const [preciofinal,setPrecio]=useState(0)

    //Siempre que se quiera modificar un estado siendo este array u objeto. Primero hay que copiarlo
                    //  const copia=carrito.slice(inicio,fin)  ==>array /////// const copia=carrito.
                    //   ahora se modificaria copia y se setearia con setCarrito(arraynfin(copia))
    
    const [total,setTotal]=useState(0)

    const addItem=(producto,numero,precio)=>{
        setCarrito(carrito.concat({producto:producto,cantidad:numero}))
        setPrecio(preciofinal+(numero*precio))
        setTotal(total+numero)
    }

    const removeItem=(id,onAdd,state,cantidad,precio)=>{
        

        
        const copiaCarrito=[...carrito]
        
        const nuevo=copiaCarrito.filter(prod =>prod.producto.id !=id);
        setPrecio(preciofinal-(cantidad*precio))
        setCarrito(nuevo)
        onAdd(state-cantidad)
        

    }
    const clear=(onAdd)=>{
        setCarrito([])
        setTotal(0)
        setPrecio(0)
        onAdd(0)
    }
    const isInCart =(id)=>{

        return carrito.some(item =>item.producto.id==id)
    }
    const sumar=(id,numero,precio)=>{      
        carrito.forEach(function(elemento, i) {
            
            if(elemento.producto.id==id){
                var new_carrito= [].concat(carrito)
                new_carrito[i].cantidad++
                setCarrito(new_carrito)
                setPrecio(preciofinal+(numero*precio))
                

            }else{
                
            }
        })
    }


    const valorContexto={
        carrito,   //====== a carrito:carrito
        total,
        addItem:addItem,
        removeItem,
        clear,
        isInCart,
        sumar,
        preciofinal
                
    }
    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider


