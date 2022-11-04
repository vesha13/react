import React from "react"
import ShopItem from "./ShopItem"
import './App.css'


function ListView ({items}){

    return(
       
        <div>
        {items.map((item, id) => {
            return(<ShopItem
            key = {id}
            id= {id}
            item ={item}
            name = {item.name}
            price ={item.price}
            color ={item.color}
            img = {item.img}
            />)
          })}
        </div>
    )
}

export default ListView
