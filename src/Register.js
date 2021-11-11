import React, {useState} from 'react';
import {makeTasksObject} from './ObjectCreator.js';

function Register ({setLogin, setToken, setTaskState}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <button type='button' onClick={()=>setLogin()}>Log in with an existing account</button>
            <p>Register</p>
            <p>Username</p>
            <input onChange={e => setUsername(e.target.value)}/>
            <p>Password</p>
            <input onChange={e => setPassword(e.target.value)}/>
            <button type='button' onClick={() => {
                fetch('https://duit-api.herokuapp.com/auth/register', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({username: username, password: password})
                })
                .then(res => res.json())
                .then(data => {
                    setToken(data.token);
                    return data.token;
                })
                .then(token => fetch(`https://duit-api.herokuapp.com/update/tasks?token=${token}`))
                .then(res => res.json())
                .then(data => setTaskState(makeTasksObject(data)))
            }}>
                Register
            </button>
        </div>
    );
}
export default Register;