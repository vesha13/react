import React from "react"
import './App.css';
import ShopCard from './ShopCard'

function CardView ({cards}){

    return(
        <div>
        {cards.map((card, id) => {
            return(<ShopCard
            key = {id}
            id= {id}
            item ={card}
            name = {card.name}
           // Switch ={switchBut}
            price ={card.price}
            color ={card.color}
            img = {card.img}
            />)
          })}
        </div>
    )
}
export default CardView
