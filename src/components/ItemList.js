import React from "react";
import Item from "./Item";

export default function ItemList({productos}){
    return(
        <section className="productos" >
            { productos.map((producto) =>( 
                <Item producto={producto} key={producto.id}/>
                
                ))
                
            }
            
        </section>
    )
}