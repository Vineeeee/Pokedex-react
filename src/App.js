import './App.css';
import { ThemeProvider } from './contexts/theme-context';
import { AppRoutes } from './routes/routes';
import { createGlobalStyle } from 'styled-components';
import './fonte/font.css'

function App() {

  return (
    <>
    <ThemeProvider>
      <Global/>
      <AppRoutes/>
    </ThemeProvider>
    </>
  )
}

const Global = createGlobalStyle`
*{
  margin: 0;
  // padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'PokeFont', sans-serif;
  list-style: none;
}

a{
  color: gray
}

`

export default App;
