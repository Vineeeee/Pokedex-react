import React, { useState } from "react"
import { CardPokemon } from '../pages/home'

const Form = (props) => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        props.addPokemon()
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Show more</button>
        </form>
    )
}

export default Form