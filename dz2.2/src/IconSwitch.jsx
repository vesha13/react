import React from "react"
import './App.css'

function IconSwitch ({icon , onSwitch}){

    const handleSubmit = (e) =>{
        e.preventDefault()
         onSwitch()
     } 
    return(
        <div >
            <button onClick={(e) =>handleSubmit(e)}><img alt='' src={icon}/></button>
        </div>
    )
}
export default IconSwitch
