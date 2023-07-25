import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CardPokemon } from "../pages/home"
import { PokemonPage } from "../pages/pokemon-page"
import React, { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"

const AppRoutes = () => {

    const {theme,setTheme} = useContext(ThemeContext)

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<CardPokemon/>} />
                <Route exact path='/pokemon/:id' element={<PokemonPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }