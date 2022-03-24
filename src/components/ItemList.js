import React from "react";
import Item from "./Item";

export default function ItemList({productos}){
    return(
        <div className="container ">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    { productos.map((producto) =>( 
                        <Item producto={producto} key={producto.id}/>
                        ))    
                    }
                </div>
                </div>
            
                
               
            
        
    )
}