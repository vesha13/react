import React from "react";
import './App.css';

function ShopCard ({name,price, color,img}){
    return(
        <div className="card">
            <div>
            <div>{name} </div>
            <div>{color}</div>
            </div>
            <img src = {img} alt='img'></img>
            <div>
            <div>{price}</div>
            <button>Add to chart</button>
            </div>
        </div>
    )
}
export default ShopCard