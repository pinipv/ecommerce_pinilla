import {createContext, useState} from 'react'



export const contexto=createContext()

const { Provider } = contexto

const MiProvider=({children})=>{

    const [carrito,setCarrito]=useState([])

    //Siempre que se quiera modificar un estado siendo este array u objeto. Primero hay que copiarlo
                    //  const copia=carrito.slice(inicio,fin)  ==>array /////// const copia=carrito.
                    //   ahora se modificaria copia y se setearia con setCarrito(arraynfin(copia))
   
    const [total,setTotal]=useState(0)

    const addItem=(producto,numero)=>{
        setCarrito(carrito.concat({producto:producto,cantidad:numero}))
        
        setTotal(total+numero)
    }

    const removeItem=(id)=>{
    
    }
    const clear=()=>{
        setCarrito([])
        
        setTotal(0)
    }
    const isInCart =(id)=>{

        return carrito.some(item =>item.producto.id==id)
    }
    const sumar=(id,valor)=>{       //el valor se ha quedado en espera de que se me ocurra como hacerlo bien
        carrito.forEach(function(elemento, i) {
            console.log(elemento, i);
            if(elemento.producto.id==id){
                var new_carrito= [].concat(carrito)
                
                new_carrito[i].cantidad++
                
                setCarrito(new_carrito)

            }else{
                
            }
        })
    }
    const borrar=(btn)=>{
        console.log(btn.target.id)
        const copiaCarrito=[...carrito]
        const index=carrito.findIndex(prod =>prod.id ===btn.target.id);

        copiaCarrito.splice(index,1);
        console.log(copiaCarrito)

        var arr = [1, 2, 3, 4];
        var greater = remove(arr, function(n) { return n > 2;});
        console.log(arr)
    }

    


    const valorContexto={
        carrito,   //====== a carrito:carrito
        total,
        addItem:addItem,
        removeItem,
        clear,
        isInCart,
        sumar,
        borrar        
    }
    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider


