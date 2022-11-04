import './App.css';
import React from "react"
//import Portfolio from './Portfolio';
//import projects from './Projects';


function PorojectList ({projects}){
    
        return (
            <ul className='cards'>
                 {projects.map((item, index)=> <div  key={index}><img src ={item.img} alt ='img'></img></div>)}
            </ul>
          )
        }

    


export default PorojectList