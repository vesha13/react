//import logo from './logo.svg';
import './App.css';
import Store from './Store';
//import IconSwitch from './IconSwitch';
import React from 'react';
import products from './products';

function App() {

  
 
  
  return (
    <div >
      <Store 
      products={products}/>
    </div>
    
  );
}

export default App;
