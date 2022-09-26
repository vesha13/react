import React from "react"
import './App.css';

function IconCwitch ({icon , onSwitch}){
    return(
        <li >
            <button  onClick ={onSwitch()}>{icon.value}</button>
        </li>
    )
}
export default IconCwitch
