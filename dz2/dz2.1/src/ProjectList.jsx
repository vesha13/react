import './App.css';
import React from "react"
//import Portfolio from './Portfolio';


function PorojectList ({projects}){

    projects.map((projects) => {
        return (
            <li>
                <img src ={projects.img} alt =""/>
            </li>
          )})
        }

    
    


export default PorojectList