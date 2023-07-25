import React, {useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import imgArrow from '../images/arrow-poke.png'
import { H3Info } from "../variables/variables-styled-components"
import { ParaOverflow } from "../variables/variables-styled-components"
import { LiOverflow } from "../variables/variables-styled-components"
import { UlOverflow } from "../variables/variables-styled-components"
import { DivOverflow } from "../variables/variables-styled-components"
import { SectionOverflow } from "../variables/variables-styled-components"
import { DivTexts } from "../variables/variables-styled-components"
import { ImgPokemonInPokedex } from "../variables/variables-styled-components"
import { DivPokePage } from "../variables/variables-styled-components"
import { DivInfo } from "../variables/variables-styled-components"
import { ImgArrowPoke } from "../variables/variables-styled-components"
import { H3Nome } from "../variables/variables-styled-components"

async function getingPokemonsId(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const url = await response.json()
    return url
}

const PokemonPage = ()=>{

    const [pokePage,setPokemon] = useState([{}])
    const [load,setLoad] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        async function fetchData(){
            const pokemonChose = await getingPokemonsId(id)
            setPokemon([{
                nome:pokemonChose.name, 
                img:pokemonChose.sprites.versions["generation-v"]["black-white"].animated.front_default, 
                type: pokemonChose.types[0].type.name,
            }])
            setPokemon(prevState => ({
                ...prevState,
                abilities: pokemonChose.abilities.map(element => element.ability.name),
                moves: pokemonChose.moves.map(element => element.move.name)
              }))
            setLoad(true)
        }    
        fetchData()
    },[])

    return(
        <DivPokePage>
            <DivInfo><ImgArrowPoke src={imgArrow}/><H3Info>INFO</H3Info></DivInfo>
            <DivTexts>
                <ImgPokemonInPokedex src={pokePage[0].img} alt={pokePage.nome}/>
                <H3Nome>{pokePage[0].nome}</H3Nome>
                <H3Nome>Type: {pokePage[0].type}</H3Nome>
            </DivTexts>
                <SectionOverflow>
                <DivOverflow>
                <UlOverflow>
                    <ParaOverflow>Abilities: </ParaOverflow>
                {pokePage.abilities?.map((ability, index) => (
                    <LiOverflow key={index}>{ability}</LiOverflow>
                ))}
                </UlOverflow>
                <UlOverflow>
                    <ParaOverflow>Moves: </ParaOverflow>
                {pokePage.moves?.map((ability, index) => (
                    <LiOverflow key={index}>{ability}</LiOverflow>
                ))}
                </UlOverflow>
                </DivOverflow>
                </SectionOverflow>
        </DivPokePage>
    )
    }

export {PokemonPage}