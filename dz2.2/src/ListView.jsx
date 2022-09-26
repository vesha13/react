import React from "react"
import './App.css';

function ListView ({items}){

    return(
        <li className ='ListView'>{items.value}</li>
    )
}
export default ListView
