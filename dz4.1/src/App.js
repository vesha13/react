import React, { useState } from 'react';
import List from './List';
import Adder from './Adder';
import './App.css';

function App() {
    const[goal, SetGoal]= useState([])
  


    const addTask = (userInput, userInput2) =>{
            const newItem = {
                id: goal.length,
                task: userInput,
                km: userInput2,
                completed: false

            }
            SetGoal([...goal, newItem])
    }




    const done = (id) => {
       const cur = goal.splice(id, 1)
       SetGoal([...goal.filter((todo) => todo !==cur)])
    }



  return (
    <div className = "App">
      <header className = 'head' >
      <div>Дата(ДД.ММ.ГГ)</div>
      <div>Пройдено км</div>
      </header>
      
      <Adder
     addTask={addTask}
      />
      {goal.map((todo) =>{
      return (<List
        todo = {todo}
        done = {done}
        />)
      })}
    </div>
  );
}

export default App;