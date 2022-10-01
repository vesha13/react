import React, { useState } from "react"
import './App.css';

function Adder({addTask}) {
    const[userInput, setUserInput] = useState('')
    const[userInput2, setUserInput2] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(userInput)
        addTask(userInput2)
        setUserInput('')
        setUserInput2('')
    } 

    return (
        <div onSubmit = {handleSubmit} className='Adder'>
            <ul  >
                <input
            class='input'
            value = {userInput}
            type = 'text'
            onChange = {(e) =>{
                setUserInput(e.currentTarget.value); }}
            onKeyDown = {(e) =>{
                if(e.key === "Enter" && userInput!== ''){
                    handleSubmit(e)
                }}} />
                <input
            class='input'
            value = {userInput2}
            type = 'text'
            onChange = {(e) =>{
                setUserInput2(e.currentTarget.value); }}
            onKeyDown = {(e) =>{
                if(e.key === "Enter" && userInput2!== ''){
                    handleSubmit(e)
                }}} 
             />
            </ul>
            <button className='Button' onClick={(e) => {if(userInput!== '' && userInput2!== '')handleSubmit(e); else alert('ошибка')}}><h4>ok</h4></button>
        </div>

    )
}

export default Adder