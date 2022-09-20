import React from "react"
import './App.css';

let newItem = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

class ShopItemClass extends React.Component {

   
    render() {
      
        
    return (
      <div  className='ShopItemClass'>
        <div class="main-content">
            <h2>{newItem.brand}</h2>
            <h1>{newItem.title.toUpperCase()}</h1>
            <h3>{newItem.description.toUpperCase()}</h3>
            <div class="description">{newItem.descriptionFull}</div>
            <div class="highlight-window mobile">
              <div class="highlight-overlay"></div>
            </div>
            <div class="divider"></div>
            <div class="purchase-info">
              <div class="price">{newItem.currency.concat(newItem.price)}</div>
              <button>Добавить в корзину</button>
            </div>
          </div>
        </div>
    )
  }
}

export default ShopItemClass
