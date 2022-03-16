import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main.js"

import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


import {useState} from "react"





import {BrowserRouter}from 'react-router-dom'


const App=()=> {
 const [state,setState]=useState(0)
    return  (
    
            <BrowserRouter>    
                <Header estado={state}/>   
                <Main onAdd={setState}state={state}/>   
                <Footer/>
                <ToastContainer/>
            </BrowserRouter>
            
                ) 
}


export default App