import React, {useState} from 'react';
import {makeTasksObject} from './ObjectCreator.js';

function GoogleSignIn ({setToken, setTaskState}) {
    const [tempToken, setTempToken] = useState('');
    
    function onSignIn(googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
        // send Google ID token to server, get response and set token (same format as login request in Login.js)
        fetch('https://duit-api.herokuapp.com/auth/login-google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({token: id_token})
        })
        .then(data => {
            setToken(data.token);
            setTempToken(data.token);
        })
        .then(_ => fetch(`https://duit-api.herokuapp.com/update/tasks?token=${tempToken}`))
        .then(res => res.json())
        .then(data => setTaskState(makeTasksObject(data)))
    }

    return (
        <div>
        <div class="g-signin2" data-onsuccess={onSignIn}></div>
        </div>
    );
}

export default GoogleSignIn;