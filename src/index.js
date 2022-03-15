//Lineas necesarias


//Necesitamps la variable react en scope =>Primera
//Necesitamps la variable reactDom en scope =>Segunda
//Necesitamps un componente en scope =>Tercera
//Necesitamps poner el componente en el DOM =>Cuarta

// Primera linea

import React from "react";

//segunda linea
import ReactDom from "react-dom"
import App from "./App"

import "./css/index.css"
import "./css/header.css"
import "./css/navBar.css"
import "./css/itemCount.css"
import "./css/item.css"
import 'react-toastify/dist/ReactToastify.css';
//Tercera linea

//const App=()=>{return "Hola Mundo"}
//Cuarta linea
ReactDom.render(<App/>,document.getElementById("root"))
//a=> "componente(funcion) que quieres mostrar" Ejemplo a= App()
//b=> "donde se va a renderizar(imprimir) del Dom(html)"   Ejemplo: b= document.getElementbyId("divprimero")

