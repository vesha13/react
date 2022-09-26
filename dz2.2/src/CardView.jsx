import React from "react"
import './App.css';

function CardView ({cards}){

    return(
        <li className ='CardView'>{cards.value}</li>
    )
}
export default CardView
