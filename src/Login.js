import React, {useState} from 'react';
import {makeTasksObject} from './ObjectCreator.js';


function Login({setLogin, setToken, setTaskState, token}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <button type='button' onClick={()=>setLogin()}>Create an account</button>
            <p>Login</p>
            <p>Username</p>
            <input onChange={e => setUsername(e.target.value)}/>
            <p>Password</p>
            <input onChange={e => setPassword(e.target.value)}/>
            <button type='button' onClick={() => {
                fetch(`http://localhost:8000/login?username=${username}&password=${password}`)
                .then(res => {
                    if (res.status!=401){
                        return res.json()
                    }
                    else {
                        alert('Incorrect credentials');
                        return {token: ''};
                    }
                })
                .then(data => setToken(data.token))
                .then(_ => fetch(`http://localhost:8000/update/tasks?token=${token}`))
                .then(res => res.json())
                .then(data => setTaskState(makeTasksObject(data)))
            }}>
                Log in
            </button>
        </div>
    );
}

export default Login;