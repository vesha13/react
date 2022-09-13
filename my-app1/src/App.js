import React, {useState} from "react"
import ShopItemFunc from './ShopItemFunc';
import './App.css';

function App() {
    const[item, SetItem]= useState([])

    const addItem = () =>{
      SetItem([item])
      }



  return (
    
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={addItem} />
    </div>
  </div>
  
  )
}

export default App;