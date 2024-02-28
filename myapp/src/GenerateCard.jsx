import { useState } from 'react'
import React from 'react'
import './card.css'
import { SaveData } from './Save'
import { useEffect } from 'react'
import clicked from './PokeTeam'


export default function GenerateCard(props) {

    let [pokearr, setPokeArr] = useState([])
    let [name, setName] = useState('')
    let [image, setImage] = useState('')
    let [save, setSave] = useState('')
    var chosenTeam = document.getElementById('pokemon-team')

    useEffect(() => {
        if (props.num >= 1) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + props.num)
        .then(res => res.json())
        .then(data => {
            setSave(JSON.stringify(data))
            setName(data.name)
            setImage(data.sprites.other["official-artwork"].front_default)
        })
    }})

    function handleSave() {

        SaveData(props.num, save)
        if (pokearr.length < 5) {
            setPokeArr(pokearr => [...pokearr,props.num] )
            clicked(props.num)
        }
        else {
            alert('Team full')
        }

    }

    function resetTeam() {
        setPokeArr(pokearr => [])
        sessionStorage.clear()
        chosenTeam.innerHTML = " "
    }

    function multiplefunc() {
        handleSave()
    }


    // function getSave() {
    //     let getData = GetData()
    //     console.log(getData)
    // }



    return (
        <div>
            <div className="card">
                <div><h1>{name}</h1></div>
                <div><img src={image} alt='' /></div>
            </div>
            <br />
            <button id="addTeam" onClick={() => multiplefunc()} >Add to team</button>
            <br /><p>Max 5 team members</p>
            <br />
            <button onClick={() => resetTeam()} >Reset Team</button>
            <br />

          <div id="pokemon-team"> </div>
        </div>
    )




}