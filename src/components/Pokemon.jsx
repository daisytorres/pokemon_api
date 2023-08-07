//paired programming with Anthony, Richard, Josh, Viviana, and Kye 

import React, { useState } from 'react'


const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const FetchPoki = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then (response => {
            return response.json()
        })

        .then (responseJson => {
            setPokemonList(responseJson.results) //makes it an array that we can . through
        })

        .catch(err => {
            console.log(err)
        })
    }



    return (
        <div>

            <h1>Pokemon</h1>
            <ul>
                {pokemonList.map((pokemon, idx) => 
                <li key={idx}>{pokemon.name}</li>
                )}
            </ul>
            <button onClick ={FetchPoki}>Catch them all!</button>

        </div>
    )
}

export default Pokemon