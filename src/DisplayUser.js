//Show "Hello, ___" instead of login/register when logged in
import React, {useState} from 'react';
import Register from './Register.js';
import Login from './Login.js';
import GoogleSignIn from './GoogleSignIn.js';


function DisplayUser({setTokenState, setTasksState}) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
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

export default DisplayUser;