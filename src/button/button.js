import React, {useContext} from "react"
import { ThemeContext } from "../contexts/theme-context"
import styled from 'styled-components'
import '../fonte/font.css'
import { ThemeProvider } from "../contexts/theme-context"

export const Button = (props)=>{

    const {theme} = useContext(ThemeContext)

    return(
        <TogglerButton {...props}></TogglerButton>
    )
}

const TogglerButton = styled.button`
width: 30px;
height: 30px;
margin: 10px;
border-radius: 50%;
background-size: 35px;
background-position: center;
background-repeat: no-repeat;
`

