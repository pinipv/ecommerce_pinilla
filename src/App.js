import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main.js"

import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


import {useState} from "react"
import MiProvider from './components/CartContext'




import {BrowserRouter}from 'react-router-dom'


const App=()=> {
 const [state,setState]=useState(0)
    return  (
                     
                <BrowserRouter> 
                    <MiProvider  onAdd={setState} state={state}> 
                        <Header estado={state} />   
                        <Main state={state} onAdd={setState}/> 
                    </MiProvider>  
                    <Footer/>
                    <ToastContainer/>
                </BrowserRouter>
        
                ) 
}


export default App

