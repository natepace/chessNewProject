import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#bfcba8',
    secondColor: '#5b8a72',
    thirdColor: '#56776c',
    fontColor: '#52734d'

}
export const darkTheme = {
    body: '#152a38',
    secondColor: '#29435c',
    thirdColor: '#556e53',
    fontColor: '#d1d4c9'
}

export const GlobalStyles = createGlobalStyle`

body{
    background-color: ${props => props.theme.body};
    display:flex;
    justify-content:center;
}

`