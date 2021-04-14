import React, { useState } from 'react';
// import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.js';
import ChessComps from './components/chesscomps.js';
import toggler from './button.png';
function App() {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div>
          <img className="toggler" src={toggler} alt='toggle' onClick={() => themeToggler()} />
        </div>

        <ChessComps />
      </StyledApp>

    </ThemeProvider>
  );
}

export default App;

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};
display:flex;
width:100%;
flex-direction:column;
justify-content:center;


.toggler{
  width:40px;
  cursor:pointer;
}
`
