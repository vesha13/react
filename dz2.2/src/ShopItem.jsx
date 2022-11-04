import React from "react";
import './App.css';

function ShopItem ({name,price, color, img}){

   
    return(
        <div className="item">
            <img src = {img} alt='img'></img>
            <div>{name}</div>
            <div>{color}</div>
            <div>{price}</div>
            <button>Add to chart</button>
        </div>
    )
}
export default ShopItem