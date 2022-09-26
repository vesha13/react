import React, {useState} from "react"
import './App.css';
import IconSwitch from './IconSwitch'
import CardView from './CardView'
import ListView from './ListView'

function Store ({products}){

  const[icon, setIcon]= useState('List')
  
    const onSwitch =() =>{
      setIcon('Dashbord')
  }
return(
      <div>
              <div>
                <IconSwitch
                icon ={icon}
                onSwitch ={onSwitch}
                  />
             </div>
            <div>
              {products.map ((product)=> <CardView cards ={product}/>)}
            </div>
            <div>
              {products.map ((product)=> <ListView items ={product}/>)}
            </div>
            </div>
  )
}

export default Store