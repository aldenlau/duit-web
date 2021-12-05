import React, {useState} from 'react';
import styled from 'styled-components';
import {Button, Button2, Input} from './StyledElements.js';

function RegisterBase ({className, setLogin, setToken, setTaskState}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className={className}>
            <Button2 type='button' onClick={()=>setLogin()}>Log in with an existing account</Button2>
            <p>Register</p>
            <p>Username</p>
            <Input onChange={e => setUsername(e.target.value)}/>
            <p>Password</p>
            <Input onChange={e => setPassword(e.target.value)}/>
            <Button type='button' onClick={() => {
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
                });
            }}>
                Register
            </Button>
        </div>
    );
}

const Register = styled(RegisterBase)`
    display: flex;
    flex-direction: column;
    padding: 6px 12px 7px 12px;
    align-items:center;
`;
export default Register;