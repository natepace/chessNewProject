import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.js';
import ChessComps from './components/chesscomps.js';
import PlayerVersus from './components/playerversus.js';
import { ClubPage } from './components/ClubPage.js';
import { NavBar } from './components/NavBar.js';
import darktoggle from './darkmode.png';
import lighttoggle from './lightmode.png'
import github from './github_white.png'
function App() {
  const [theme, setTheme] = useState('dark')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyles />

        <Router>
          {/* <div className="head"> */}
          <NavBar />
          <div className="buttons">
            <a href="https://github.com/natepace/chessNewProject" target="_blank" rel="noreferrer" >
              <img className="toggler" src={github} alt="github" />
            </a>
            <div className="darktoggle">
              {theme === 'light' ? <img className="toggler" src={darktoggle} alt='toggle' onClick={() => themeToggler()} />
                : <img className="toggler" src={lighttoggle} alt='toggle' onClick={() => themeToggler()} />}

            </div>
          </div>
          {/* </div> */}

          <Route exact path='/' component={ChessComps} />

          <Switch>
            <Route path='/versus' component={PlayerVersus} />
            <Route path='/club' component={ClubPage} />
          </Switch>


        </Router>




        {/* <ChessComps /> */}
      </StyledApp>

    </ThemeProvider>
  );
}

export default App;

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};

display:flex;
// width:100vw;
flex-direction:column;
justify-content:center;
.buttons{
  display:flex;
  justify-content:space-between;
}

.darktoggle{
  display:flex;
  justify-content:flex-end;
  @media (max-width:560px){
    display:none;
  }
  
}

.toggler{
  margin:4px;
  width:36px;
  cursor:pointer;
  
  
  
}


`
