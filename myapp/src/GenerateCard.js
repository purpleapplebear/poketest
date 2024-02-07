import { useState } from 'react'
import React from 'react'
import './card.css'
import { SaveData, GetData } from './Save'

export default function GenerateCard(props) {

    let [name, setName] = useState('')
    let [image, setImage] = useState('')
    let [save, setSave] = useState('')

    if (props.num >= 1) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + props.num)
    .then(res => res.json())
    .then(data => {
        setSave(JSON.stringify(data))
        setName(data.name)
        setImage(data.sprites.other["official-artwork"].front_default)
    })
}

    function handleSave() {
        SaveData(save)
    }

    function getSave() {
        let getData = GetData()
        console.log(getData)
    }



    return (
        <div>
            <div className="card">
                <div><h1>{name}</h1></div>
                <div><img src={image} alt='' /></div>
            </div>
            <br />
            <button onClick={handleSave} >Save</button>

            <br />
            <button onClick={getSave}>Get</button>
        </div>


    )




}