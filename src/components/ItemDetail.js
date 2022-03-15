
import ItemCount from "./ItemCount.js"

const ItemDetail = ({item,funcion,max,state}) => {
    return (
        <article className="itemDetail">
            <img src={item.image} alt="" />
            <div className="titulos">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div>
                
                <span>Rates : {item.rating?.count}</span>
                </div>
            </div>
            <p className="descripcion">{item.description}</p>
            <ItemCount funcion={funcion} max={max} state={state}/>          
        </article>

    )
}

export default ItemDetail
