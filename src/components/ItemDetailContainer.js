import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";

import { db } from "../firebase"
import { collection, getDoc, doc, query, where, getDocs } from "firebase/firestore"


const ItemDetailContainer = ({onAdd,state}) => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {idProducto} = useParams()

  

  useEffect(() => {

    const productosCollection = collection(db, "productos")
    const filtro = query(productosCollection, where("id", "==", Number(idProducto)))
    const consulta = getDocs(filtro)

    consulta
      .then(res => setItem(res.docs[0].data()))
      .catch(() => toast.error("Error al cargar los productos"))
      .finally(() => setLoading(false))
      
    //setItem(res.docs.map(doc => doc.data())[0])
    //const pedido = getDoc(doc(productosCollection,"wGWFvOpJ6M7iB8J9LwCO"))
    //pedido.then((res)=>console.log(res.data())

  }, [idProducto])


  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return (
      <ItemDetail item={item} onAdd={onAdd} state={state}/>
    )
  }
}

export default ItemDetailContainer