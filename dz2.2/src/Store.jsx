import React, {useState} from "react"
import './App.css';
import IconSwitch from './IconSwitch'
import CardView from './CardView'
import ListView from './ListView'
//import 'https://fonts.googleapis.com/icon?family=Material+Icons'
import card from'./card.png'
import list from './list.png'


function Store ({products}){

  
  //const[ListСondition, setList] = useState(false);
  const[ListCondition, setCard] = useState(true);

  const SwitchList = () =>{
    setCard(()=> false)
  }

  const SwitchCard = () =>{
    setCard(()=> true)
  }
  

  if(ListCondition)
  return(
    <div>
    <IconSwitch 
        icon={card}
        onSwitch = {SwitchList}
        />
  <ListView items={products}/>
    </div>)
  else
  return(
    <div>
  <IconSwitch 
    icon={list}
    onSwitch = {SwitchCard}
    />
  <CardView cards={products} />
    </div>)
}

export default Store