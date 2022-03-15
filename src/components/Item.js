import React from "react";
import { Link } from "react-router-dom";

const Item=({producto})=>{

    return(
        <article id="producto">

            
                <h2>{producto.title}</h2>
            
           
                <img id="img-item" src={producto.image} ></img>

                <p>Precio: {producto.price}$</p>
                <Link to={`/producto/${producto.id}`}>ver detalle</Link>
                
                
            
            
        </article>
    
    
    
    )
}
export default Item

/////id,title,price,pictureUrl