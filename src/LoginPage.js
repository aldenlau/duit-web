//Show "Hello, ___" instead of login/register when logged in
import React, {useState} from 'react';
import Register from './Register.js';
import Login from './Login.js';
import GoogleSignIn from './GoogleSignIn.js';
import styled from 'styled-components';
import logo from './logo.png'

function LoginPageBase({className, setTokenState, setTasksState}) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className={className}>
            <img src={logo} width="20%" height="20%" style={{margin: "10px"}}></img>
            <GoogleSignIn 
                setToken={setTokenState} 
                setTaskState={setTasksState}
            />
            {showLogin ? <Login 
                setLogin={() => setShowLogin(false)} 
                setToken={setTokenState} 
                setTaskState={setTasksState}
                /> 
                : 
                <Register 
                setLogin={() => setShowLogin(true)}
                setToken={setTokenState} 
                setTaskState={setTasksState}
            />}
            
        </div>
    );
}

const LoginPage = styled(LoginPageBase)`
    margin: 5% auto auto auto;
    padding: 20px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items:center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

export default LoginPage;