import React, {useEffect, useState, useContext} from "react"
import Form from "../form/form"
import { Link } from 'react-router-dom'
import { ThemeContext } from "../contexts/theme-context"
import { ThemeTogglerButton } from "../theme-toggler/theme-toggler-button"
import { ThemeProvider } from "../contexts/theme-context"
import { Selection } from "../input/input"
import { Section } from "../variables/variables-styled-components"
import { Footer } from "../variables/variables-styled-components"
import { Li } from "../variables/variables-styled-components"
import { ImgPokeHome } from "../variables/variables-styled-components"
import { P } from "../variables/variables-styled-components"
import { Div } from "../variables/variables-styled-components"
import { Ul } from "../variables/variables-styled-components"

async function getingPokemonsUrl(offset, limit){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}/`)
    const pokemons = await response.json()
    const url = pokemons.results.map((params)=>params.url)
    return url
}

async function getPokemons(params) {
        const promises = params.map(async (element) => {
          const uy = await fetch(element);
          const gr = await uy.json();
          return gr;
        });
        return Promise.all(promises);
}

const CardPokemon = ()=>{

    const {theme,setTheme} = useContext(ThemeContext)
    const [poke,setPoke] = useState([{}])
    const [newPoke,setNewPoke] = useState([{}])
    const [load,setLoad] = useState(false)
    const [pokeStorage, setPokeStorage] = useState({})

    useEffect(()=>{
        async function fetchData(){
            const pokemonss = await getingPokemonsUrl(0,10)
            const reponseJsonPokemons = await getPokemons(pokemonss)

            const mapPokemon = reponseJsonPokemons.map((c,index)=>[{id: c.id,nome:c.name, img:c.sprites.versions
                ["generation-v"]["black-white"].animated.front_default, type: c.types[0].type.name}])

            setPokeStorage(mapPokemon)
            setPoke(mapPokemon)
            setLoad(true)
        }    
        fetchData()
    },[])
        const resultadoFinal = poke.map((pokemon,index)=>{
        const variavelNome = pokemon[0]?.nome;
        const variavelImg = pokemon[0]?.img
        const firstLetter = variavelNome?.charAt(0)?.toUpperCase();
        const restOfName = variavelNome?.slice(1);
        const formattedName = firstLetter + restOfName;

        return(
            <Link to={`/pokemon/${pokemon[0]?.id}`} key={index}>
            <Li key={index}>
                <ImgPokeHome src={variavelImg}/>
                <P>{formattedName.toString()}</P>
            </Li>
            </Link>
        )
        })

        async function fetchData(){
            const pokemonss = await getingPokemonsUrl(0,10)
            const reponseJsonPokemons = await getPokemons(pokemonss)

            const mapPokemon = reponseJsonPokemons.map((c,index)=>[{id: c.id,nome:c.name, img:c.sprites.versions["generation-v"]["black-white"].animated.front_default, type: c.types[0].type.name}])

            setPoke(mapPokemon)
        }    

        async function addPokemon() {
            const pokemonss = await getingPokemonsUrl(10,10)
            const reponseJsonPokemons = await getPokemons(pokemonss)
            const mapPokemon = reponseJsonPokemons.map((c)=>[{id: c.id,nome:c.name, img:c.sprites.versions
                ["generation-v"]["black-white"].animated.front_default, type: c.types[0].type.name}])

            setNewPoke(mapPokemon)
            setPokeStorage((prevPoke) => prevPoke.concat(mapPokemon))
            setPoke((prevPoke) => prevPoke.concat(mapPokemon))
        }

        async function filterPokemon(selectedType){
            if (selectedType === "0") {
                fetchData()
              } else {
                const filteredPokemon = pokeStorage.filter(
                  (pokemon) => pokemon[0].type === selectedType
                );
                setPoke(filteredPokemon);
              }
        }

    return(
        <Div style={{backgroundColor: theme.background}}>
            <Section>
                <ThemeTogglerButton/>
                    <Selection filterPokemon={filterPokemon}/>
            </Section>
            <Ul>
                {resultadoFinal}
            </Ul>
           {poke.length == 10 &&<Footer><Form addPokemon={addPokemon} /></Footer>}
        </Div>
    )
    }
export {CardPokemon}