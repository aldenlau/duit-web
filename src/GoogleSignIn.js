import React, {useEffect} from 'react';
import {makeTasksObject} from './ObjectCreator.js';
import styled from 'styled-components';

function GoogleSignInBase ({setToken, setTaskState}) {
    
    function onSignIn(googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
        // send Google ID token to server, get response and set token (same format as login request in Login.js)
        fetch('https://duit-api.herokuapp.com/auth/login-google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token: id_token})
        })
        .then(res => res.json())
        .then(data => {
            setToken(data.token);
            return data.token;
        })
        .then(token => fetch(`https://duit-api.herokuapp.com/update/tasks?token=${token}`))
        .then(res => res.json())
        .then(data => setTaskState(makeTasksObject(data)))
    }

    
    useEffect(() => {
        window.gapi.signin2.render('g-signin2', {
          'scope': 'https://www.googleapis.com/auth/plus.login',
          'width': 120,
          'height': 36,
          'longtitle': false,
          'theme': 'light',
          'onsuccess': onSignIn
        })
    });
    return (
        <div>
        <div id="g-signin2" data-onsuccess={onSignIn}></div>
        </div>
    );
}

const GoogleSignIn = styled(GoogleSignInBase)`
`;

export default GoogleSignIn;