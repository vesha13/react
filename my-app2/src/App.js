import React from "react"
import ShopItemClass from './ShopItemClass';
import './App.css';

class App extends React.Component {
  render() {
  return (
    
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
    <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item={this.newItem} />
    </div>
  </div>
  
  )
}
}

export default App;