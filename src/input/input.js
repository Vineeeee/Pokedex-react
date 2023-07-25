import React,{useState} from "react";

export const Selection = (props)=>{

    const handleSelect = async (e) => {
        const selectedType = e.target.value;
        props.filterPokemon(selectedType);
    }

    return(
        <select onChange={handleSelect}>
    <option value="0">Select type:</option>
    <option value="bug">Bug</option>
    <option value="water">Water</option>
    <option value="fire">Fire</option>
    <option value="grass">Grass</option>
    <option value="normal">Normal</option>
        </select>
    )

}  