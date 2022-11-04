//import './App.css';
//import React from "react"
//import Portfolio from './Portfolio';

function Toolbar (props){
const {filters, selected, onSelectedFilter} = props
     

        return (
            <ul className="filters">
                {filters.map((item, index) => 
                    <div  key={index}>
                        <button 
                        className ={item === selected ? 'filter_button active' : 'filter_button'}
                        onClick={e=>onSelectedFilter(e.currentTarget.innerText)} >{item}
                        </button>
                    </div>)}
            </ul>
            )
        }
export default Toolbar
