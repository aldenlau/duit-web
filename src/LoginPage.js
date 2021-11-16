//Show "Hello, ___" instead of login/register when logged in
import React, {useState} from 'react';
import Register from './Register.js';
import Login from './Login.js';
import GoogleSignIn from './GoogleSignIn.js';
import styled from 'styled-components';


function LoginPageBase({className, setTokenState, setTasksState}) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className={className}>
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
    margin:auto;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items:center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

export default LoginPage;