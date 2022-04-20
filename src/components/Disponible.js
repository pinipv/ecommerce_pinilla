

import {React,useState} from "react"

import { useContext } from "react";
import { contexto } from "./CartContext";

import { Link, NavLink } from "react-router-dom";

const Disponible = (props)=> {

    const context=useContext(contexto)
    const anadir=context.addItem
    const sumar=context.sumar
    const estado=props.state
    const setEstado=props.onAdd
    const item=props.item
    const [estado_bajo]=useState(1)
    const [setMax]=useState(false)
    const [almacen,setAl]=useState(props.max)

    const Agregar=()=>{

        var valor = document.getElementById('input-qty').value;

        if(almacen>=estado_bajo){ 
            setAl(almacen-estado_bajo)
            const found= context.isInCart(item.id)
            if(found==true){
                sumar(item.id,valor,item.price)
                setEstado(estado+estado_bajo)
            }else if(found==false){
                anadir(item,valor,item.price)
                setEstado(estado+estado_bajo)
            }
        }else{     
            setEstado(estado+almacen) 
            setMax(true)
            alert("Se ha añadido lo maximo posible debido a la falta de stock. Le ruego compruebe la cantidad final.(Esto se cambiara por una 'alerta' dentro del contador)")
            //setMax(true)  
        }
    }

    if(props.disp){
        return (<>
            
            <div className="form-group price_elem row mb-4 mt-3">
                    <label className="col-sm-3 col-md-3 form-control-label nopaddingtop">Precio:</label>
                    <div className="col-sm-8 col-md-9">
                        <span className="product-form-price" id="product-form-price">{props.item.price}$</span>   
                    </div>
            </div>
        
            <div className="form-group row mb-4">
                    <label  className="col-sm-3 col-md-3 form-control-label">Cantidad:</label>
                    <div className="col-sm-8 col-md-9">
                        <input type="number" className="qty form-control" id="input-qty" name="qty" min="1" value="1" max={props.item.stock} placeholder="1" readOnly></input>
                    </div>
            </div>

            <div className="form-group product-stock product-available row visible mb-3">
                <label className="col-sm-3 col-md-3 form-control-label"></label>
                <div className="col-sm-8 col-sm-offset-3 col-md-9 col-md-offset-3"> 
                    <h3>En Stock</h3>  
                    <input type="button" className="adc btn btn-primary" value="Añadir al carrito" onClick={Agregar}></input>
                    <li className="d-flex"> <Link to="/cart" className="">Finalizar Compra</Link></li>
                </div>
            </div>
            <div className="form-group row">
                
            </div>
        
            </>
        )
    }else{
        return(
            <div className="form-group product-stock product-out-stock row hidden mb-3">
                <label className="col-sm-3 col-md-3 form-control-label">Availability:</label>
                <div className="col-sm-8 col-md-9">
                    <span className="product-form-price">Out of stock</span>
                    <p>This product has run out of stock. You may send us an inquiry about it.</p>
                    <a href="/contact" className="btn btn-secondary btn-sm" title="Contact Us">Contact Us</a>
                    <a href="javascript:history.back()" className="btn btn-link btn-sm" title="← or Continue Shopping">← or Continue Shopping</a>
                    <li className="d-flex"> <Link to="/cart" className="">Finalizar Compra</Link></li>
                </div>
            </div>

        )
    }
    
}
export default Disponible