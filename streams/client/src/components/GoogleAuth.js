import React from 'react';


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
           window.gapi.client.init({
            clientId: '399340029985-v3s8le2l1jbrl7cfe063hgnh9letgrp6.apps.googleusercontent.com',
            scope: 'email'
           })

        });
    }

    render() {
        return(
            <div>Google Auth</div>
        )
    }
}


export default GoogleAuth