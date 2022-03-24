import React from "react";
import { Link } from "react-router-dom";

const Item=({producto})=>{

    return(
        
        <div  className="col" height="800">
        <div className="card shadow-sm">
            <img src={producto.image} className="bd-placeholder-img card-img-top" width="100%" height="350" ></img>

            <div className="card-body">
                <h2 id="tit-card">{producto.title}</h2>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p>Precio: {producto.price}$</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-primary "><Link id="link-detalle"to={`/producto/${producto.id}`}>Ver detalle</Link></button>
                    
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    
    
    )
}
export default Item

/////id,title,price,pictureUrl