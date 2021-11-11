import styled, {createGlobalStyle} from 'styled-components';
// Arvo or Merriweather
const theme = {
    main: '#00a2ff',
    fontFamily: 'Arvo',
};

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

const Input = styled.input`
    border: hidden;
    background-color: #f2f2f2;
    border-radius: 5px;
    height: 25px;
`;

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.fontFamily};
    }
`;

export {Button, Input, GlobalStyle, theme};