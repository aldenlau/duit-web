import styled, {createGlobalStyle} from 'styled-components';
// Arvo or Merriweather
const theme = {
    main: '#00a2ff',
    second: '#69c8ff',
    fontFamily: 'Roboto',
    backgroundColor: '#FFFFFF',
    altColor: 'C9C9C9',
    fontColor: '#000000',
    inputColor: '#F2F2F2',
};

const dark_theme = {
    main: '#003959',
    second: '#32607A',
    fontFamily: 'Roboto',
    backgroundColor: '#2F3136',
    altColor: '#2C2E33',
    fontColor: '#FFFFFF',
    inputColor: '#40444B',
}

const Button = styled.button`
    background-color: ${props => props.theme.main};
    color: #fff;
    border: 1px solid transparent;
    margin-right: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 35px;
    font-weight: bold;
    font-size: 12px;
    padding: 6px 12px 7px 12px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    font-family: ${props => props.theme.fontFamily};
`;

const Button2 = styled.button`
    background-color: ${props => props.theme.second};
    color: #fff;
    border: 1px solid transparent;
    margin-right: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 28px;
    font-weight: bold;
    font-size: 12px;
    padding: 6px 12px 7px 12px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    font-family: ${props => props.theme.fontFamily};
`;

const Input = styled.input`
    border: hidden;
    background-color: ${props => props.theme.inputColor};
    border-radius: 5px;
    height: 25px;
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.altColor};
    align-items: center;
`;

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    #root {
        height: 100vh;
    }
    body {
        font-family: ${props => props.theme.fontFamily};
        background-color: ${props => props.theme.backgroundColor};
        height: 100%;
    }
    p, h1, h2, h3 {
        color: ${props => props.theme.fontColor};
    }
`;

export {Button, Button2, Input, Footer, GlobalStyle, theme, dark_theme};