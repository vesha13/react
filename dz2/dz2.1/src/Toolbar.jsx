import './App.css';
//import React from "react"
//import Portfolio from './Portfolio';

function Toolbar ({filters, selected, onSelectedFilter}){

    filters.map((filters) => {
        return (
            <li>
                <button onClick={(filters)=> onSelectedFilter(filters)} selected={selected}> {filters} </button>
            </li>
          )})
        }
export default Toolbar
