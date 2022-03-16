
import ItemCount from "./ItemCount.js"

const ItemDetail = ({item,onAdd,state}) => {
    return (
        <article className="itemDetail">
            <img src={item.image} alt="" />
            <div className="titulos">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <p>Nos quedan en stock {item.id} unidades</p>
                <div>
                
                
                </div>
            </div>
            <p className="descripcion">{item.description}</p>
            <ItemCount onAdd={onAdd} max={item.id} state={state}/>          
        </article>

    )
}

export default ItemDetail
