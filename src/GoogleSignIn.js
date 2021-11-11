import React, {useState, useEffect} from 'react';
import {makeTasksObject} from './ObjectCreator.js';

function GoogleSignIn ({setToken, setTaskState}) {
    
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
          'width': 200,
          'height': 50,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': onSignIn
        })
      })
    return (
        <div>
        <div id="g-signin2" data-onsuccess={onSignIn}></div>
        </div>
    );
}

export default GoogleSignIn;