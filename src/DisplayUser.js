//Show "Hello, ___" instead of login/register when logged in
import React, {useState} from 'react';
import Register from './Register.js';
import Login from './Login.js';
import GoogleSignIn from './GoogleSignIn.js';
import styled from 'styled-components';


function  DisplayUserBase({className, setTokenState, setTasksState}) {
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

const DisplayUser = styled(DisplayUserBase)`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
`;

export default DisplayUser;