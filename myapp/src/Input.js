import { useState } from 'react'
import React from 'react'
import GenerateCard from './GenerateCard'

export default function Input() {


    let [value, setValue] = useState('')

    function handle() {
        setValue(Math.floor(Math.random() * 152))
    }


    return (
        <div>
        <p>Type a pokemon ID number in the box or hit random to generate one. </p><br />
        <input value={value} onChange={(e) => {setValue(e.target.value)}} />
        <button onClick={handle} >Random</button>
        <br />
        <GenerateCard num={value} />
        </div>
    )




}