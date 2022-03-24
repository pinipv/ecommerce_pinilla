import React,{useEffect,useState} from "react"
import ItemList from "./ItemList"

import { useParams } from "react-router-dom"
import {toast} from "react-toastify"

//// Creamos una promesa que nos devuelva los datos de la "base de datos"
////Simulamos la demora de solicitar datos a la red, demoradno 500 ms la promesa usando setTimeout()

const ItemListContainer=()=>{
    
    const [loading,setLoading]=useState(true)
    const [items,setItems]=useState([])     ////Se inicializa como array para que en caso de no llegar datos a la hora
                                            ///// de hacerle map en itemlist.js lo haga sobre un array y no  sobre undefined
    const {idCategoria} = useParams()
    var url="";
    useEffect(()=>{
        setLoading(true);
        if(idCategoria== null){
            url='https://fakestoreapi.com/products';
        }else{
            url='https://fakestoreapi.com/products/category/'+idCategoria;
        }


        //fetch('/products.json') 
        fetch(url)
        .then((response)=>{             /////////////Devuelve un promise, no los productos
            return response.json()
        })
        .then((resultado)=>{
            setItems(resultado)
            
            
        })
        .catch(()=>{
            toast.error("Error al cargar los productos")
        })
        .finally(()=>{
            setLoading(false);
        })           
    },[idCategoria]);
    
    

// ooooo

//function ItemListContainer( {greeting} ) {
//    getDatos ()
//      .then( respuestaPromise => console.log(respuestaPromise))
//      .catch( error =>console.error(error))
//}


    //getDatos() ===> llama a la funcion
    //.then(funcion(respuestaPromise)){} ===> Reupera los datos(el resultado "resolve" de la promesa y los introduce en la funcion callback)
    //.catch(function(error){}) ===> Recuper el error, si existe, o lo que seria el "reject" de la "Promise"
    
    
        


    
        
        if(loading){
            return <h3>Cargando...</h3>
        }else{  
            return (<>
                    <section className="py-5 text-center container mt-5">
                            <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">Album example</h1>
                                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                                <p>
                                <a href="#" className="btn btn-primary my-2">Main call to action</a>
                                <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                                </p>
                            </div>
                            </div>
                    </section>

                    <div className="album py-5 bg-light">
                        <ItemList productos={items}/>                     
                    </div>
                    </>)
        }

        
        
    
    
    }

export default ItemListContainer  