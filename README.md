# Breve descrição do propósito da aplicação

*Fiz essa aplicação para mostrar 10 pokemons iniciais com um botão "Show more" para aparecer mais 10, ao clicar em qualquer pokemon você entra numa nova pagina onde especifica cada detalhe do pokemon escolhido, tambem foi utilizado um filtro de tipos de pokemon utilizando select e option. Tudo isso usando React e pokemon API.*

## Breve descrição das funcionalidades da aplicação entregue

Na [home.js](src/pages/home.js) basicamente fiz uma função que retornasse os 10 primeiros pokemons, uma função para adicionar mais 10 ao clicar em show more, fazendo com que apareça o nome e a imagem do pokemon tudo usando estado. 

Na [pokemon-page.js](src/pages/pokemon-page.js) fiz uma função para retornar a pagina especifica do pokemon usando um id de parametro global utilizando o Routes e useParams, uso o retorno dele para especificar o nome, imagem, tipo, moves e abilities

No [routes.js](src/routes/routes.js) usei duas rotas: uma sendo a home e outra sendo a pagina especifica do pokemon utilizando <Link> em volta do retorno do home.js para acessa-lo utilizando o id como parametro para acessar.

No [button.js](src/button/button.js) retorna um botão personalizado usando styled components

No [theme-context](src/contexts/theme-context.js) faço um tema de contexto light e dark utilizando objeto JS, createContext e useState

No [form.js](src/form/form.js) retorna o botão submit que adiciona uma carta utilizando a funçao do home.js por meio de props e previnindo um fresh na pagina

No [input.js](src/input/input.js) retorna select e option com os valores dos tipos de pokemon e tbm retorna uma função filtro passada através do props da home.js

No [theme-toggler-button.js](src/theme-toggler/theme-toggler-button.js) retorna um botão  onde muda o tema do site para claro ou escuro utilizando o theme-context

No [variables-styled-components.js](src/variables/variables-styled-components.js) retorna estilos utilizando styled components para serem usados nos componentes [home,js](src/pages/home.js) e [pokemon-page](src/pages/pokemon-page.js)

### Ferramentas utilizadas, e o por que estas foram escolhidas para a realização do desafio e decisões adotadas durante o planejamento e execução do desafio, justificando-as

# home.js

No [home.js](src/pages/home.js) eu utilizei duas funções para retornar um pokemon de cada:
```
async function getingPokemonsUrl(offset, limit){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}/`)
    const pokemons = await response.json()
    const url = pokemons.results.map((params)=>params.url)
    return url
}
```

Na primeira função ela retorna a url com um parametro offset que seria o numero de id que deveria começar a contar os pokemons da lista e o limit que seria o numero maximo de pokemon para aparecer:

```
{"count":1281,"next":"https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"}]}
```

A função getingPokemonsUrl retorna um mapeamento do codigo acima só que pegando somente a url que é a url de cada pokemon.

A função getPokemons vai pegar de parametro o resultado do getingPokemonsUrl para mapea-lo e que no final retorna todas as URLs:

```
async function getPokemons(params) {
        const promises = params.map(async (element) => {
          const uy = await fetch(element);
          const gr = await uy.json();
          return gr;
        });
        return Promise.all(promises);
}
```

Referente aos estados abaixo:

```
    const {theme,setTheme} = useContext(ThemeContext)
    const [poke,setPoke] = useState([{}])
    const [newPoke,setNewPoke] = useState([{}])
    const [load,setLoad] = useState(false)
    const [pokeStorage, setPokeStorage] = useState({})
```

O theme foi usado para usar o teme light e dark no togglerbutton
O Poke foi usado para armazenar os pokemons retornados de getingPokemonsUrl e getPokemons
O newPoke foi usado para armazenar os 10 novos pokemons após clicar em show more e dps armazena-lo no poke (utilizado na função addPokemon()):

```
async function addPokemon() {
            const pokemonss = await getingPokemonsUrl(10,10)
            const reponseJsonPokemons = await getPokemons(pokemonss)
            const mapPokemon = reponseJsonPokemons.map((c)=>[{id: c.id,nome:c.name, img:c.sprites.versions
                ["generation-v"]["black-white"].animated.front_default, type: c.types[0].type.name}])

            setNewPoke(mapPokemon)
            setPokeStorage((prevPoke) => prevPoke.concat(mapPokemon))
            setPoke((prevPoke) => prevPoke.concat(mapPokemon))
        }
```
O load foi usado para apenas dar load na pagina
O pokeStorage foi usado para armazenar os pokemons e serem usados como parametros de como vão filtrar os tipos de pokemon (usado no filterPokemon()):

```
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
```

# pokemon-page.js

começo o codigo com o getingPokemon() para retornar o pokemon com a id usando o useParams ao clicar no link em volta da Li da home.js:

```
async function getingPokemonsId(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const url = await response.json()
    return url
}
```

# variables-styled-components

No [variables-styled-components](src/variables/variables-styled-components.js) utilizei varios styles usando o styled components para estilizar nesse arquivo separado para não ocupar muita linha dos arquivos home.js e pokemon-page.js

### Passo a passo dos comandos para que possamos rodar o seu projeto no nosso computador

Abrir o terminal, caso ele esteja assim: PS C:\Users\User\Desktop\pokemon-react>. Colocar cd pokemons e logo depois npm start