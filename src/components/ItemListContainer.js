import React,{useEffect,useState} from "react"
import ItemList from "./ItemList"

import { useParams } from "react-router-dom"
import {toast} from "react-toastify"

import { db } from "../firebase"
import { collection,getDocs,query,where } from "firebase/firestore"

const ItemListContainer=()=>{
    
    const [loading,setLoading]=useState(true)
    const [items,setItems]=useState([])   
    const {idCategoria} = useParams()

            useEffect(() => {

                if(!idCategoria){
        
                    const productosCollection = collection(db, "productos")
                    const consulta = getDocs(productosCollection)
            
                    consulta
                        .then(res => setItems(res.docs.map(doc => doc.data())))
                       
                        .catch(() => toast.error("Error al cargar los productos"))
                        .finally(() => setLoading(false))
        
                }else{
        
                    const productosCollection = collection(db, "productos")
                    const filtro = query(productosCollection,where("category","==",idCategoria))
                    const pedido = getDocs(filtro)
        
                    pedido
                        .then(res => setItems(res.docs.map(doc => doc.data())))
                       
                        .catch(() => toast.error("Error al cargar los productos"))
                        .finally(() => setLoading(false))
        
                }
        
        
            }, [idCategoria])

    
        
        if(loading){
            return <h3>Cargando...</h3>
        }else{  
            return (<>
                    <div className="album py-5 bg-light">
                        <ItemList productos={items}/>                     
                    </div>
                    </>)
        }

        
    }
        
export default ItemListContainer  