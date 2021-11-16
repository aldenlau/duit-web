import React, {useState} from 'react';
import {makeTasksObject} from './ObjectCreator.js';
import styled from 'styled-components';
import {Button, Button2, Input} from './StyledElements.js';

function LoginBase({className, setLogin, setToken, setTaskState}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={className}>
            <Button2 onClick={()=>setLogin()}>Create an account</Button2>
            <p>Login</p>
            <p>Username</p>
            <Input onChange={e => setUsername(e.target.value)}/>
            <p>Password</p>
            <Input onChange={e => setPassword(e.target.value)}/>
            <Button type='button' onClick={() => {
                fetch(`https://duit-api.herokuapp.com/auth/login?username=${username}&password=${password}`)
                .then(res => {
                    if (res.status!=401){
                        return res.json()
                    }
                    else {
                        alert('Incorrect credentials');
                        return {token: ''};
                    }
                })
                .then(data => {
                    setToken(data.token);
                    return data.token;
                })
                .then(token => fetch(`https://duit-api.herokuapp.com/update/tasks?token=${token}`))
                .then(res => res.json())
                .then(data => setTaskState(makeTasksObject(data)))
            }}>
                Log in
            </Button>
        </div>
    );
}

const Login = styled(LoginBase)`
    display: flex;
    flex-direction: column;
    padding: 6px 12px 7px 12px;
    align-items:center;
`;

export default Login;