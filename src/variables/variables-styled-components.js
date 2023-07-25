import styled from 'styled-components'
import images from '../images/pokeball.png'
import backgroundPokemon from '../images/background-pokemon.jpg'
import backgroundCard from '../images/background-card.jpg'
import imgPokedex from '../images/background-pokemon.jpg'
import { keyframes } from 'styled-components'

// ESTILOS DE VARIAVEIS PARA A HOME

export const Section = styled.section`
    background-color: red;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-evenly;
    `
export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin-left: 20px;
    `
export const ImgPokeHome = styled.img`
    display: flex;
    padding: 30px;
    background-image: url(${backgroundPokemon});
    background-repeat: no-repeat;
    background-size: 310px;
    background-position: center;
    border: outset black gray 1px;
    border-radius: 10px;
    `
export const Div = styled.div`
    min-height:100vh;    
    `
export const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 90px;
    `
export const Li = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 35px;
    gap: 25px;
    background-color: red;
    width:250px;
    height: 400px;
    border-radius: 10px;
    border: solid black 1px;
    transition: 0.2s ease;
    background-size: 260px;
    background-image: url(${backgroundCard});
    background-repeat: no-repeat;
    background-position: center;
    &:hover{
        width:260px;
        background-size: 270px;
    }
    `
export const P = styled.p`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    color: black;
    &:before{
        background-image: url(${images});
        content: '';
        position: absolute;
        width: 23px;
        background-repeat: no-repeat;
        height: 16px;
        background-size: 15px;
        display:inline-block;
        position: relative;
        top:7px;
      }
    `
// ESTILOS DE VARIAVEIS PARA O CARD

export const arrowAnimation = keyframes`
0% { transform: translateY(0); }
100% { transform: translateY(0.4em); }
`
export const H3Nome = styled.h2`
border: gray 2px solid;
display: flex;
background-color: white;
align-self: flex-start;
padding: 25px;
padding-right: 10px;
margin-right: 30px;
margin-top: 100px;
border-radius: 5px;
@media (max-width: 414px) {
    margin-right: 0;
    align-self: center;
}
`
export const ParaOverflow = styled.p`
margin: 20px 0;
`
export const LiOverflow = styled.li`
margin: 9px 5px;
padding: 5px;
border-radius: 4px;
border: solid gray 2px;
display: inline-block;
`
export const UlOverflow = styled.ul`
display: flex
flex-direction: column;
flex-wrap: wrap;
`
export const DivOverflow = styled.div`
background-color: white;
overflow-y: auto;
height:190px;
width: 560px;
border: solid 2px gray;
border-radius: 5px;
&::-webkit-scrollbar{
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 10px;
 }
 &::-webkit-scrollbar-thumb{
    width: 15px;
    height: 35px;
    background-color: white;
    border:1px solid gray;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
 }
`
export const SectionOverflow = styled.section`
display: flex;
justify-content: center;
margin-top: 80px;

`
export const DivTexts = styled.div`
display:flex;
margin-top: 20px;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
@media (max-width: 414px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`
export const ImgPokemonInPokedex = styled.img`
width:200px;
background-color: white;
border: solid 2px gray;
margin-left: 120px;
@media (max-width: 585px) {
    margin-left: 0;
}
`
export const DivPokePage = styled.div`
background-image: url(${imgPokedex});
background-position: center;
background-repeat: repeat;
background-size: contain;
min-height: 100vh;
display: flex;
flex-direction: column;
`
export const DivInfo = styled.div`
background-color: red;
height: 50px;
border: solid 5px black;
display: flex;
padding: 10px;
gap: 10px;
margin-left: 31px;
margin-right: 31px;
`
export const H3Info = styled.h3`
    color:white;
    margin: -8px 0;
`
export const ImgArrowPoke = styled.img`
    width:25px;
    animation-name: ${arrowAnimation};
    animation-duration: 1.2s;
    animation-direction: alternate-reverse;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
`