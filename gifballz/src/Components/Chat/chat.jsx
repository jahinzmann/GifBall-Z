//imports go here
import React, { Component } from "react";
import "./chat.css";


class Chat extends Component {
    state = {argument1};
    
initChat = argument => {
// Initialize Firebase
        const config = { 
        apiKey: "AIzaSyDFbnYeiysUdSm9GUAGeTsk2HvbAKUEQMI",
        authDomain: "gifballz-d44d9.firebaseapp.com",
        databaseURL: "https://gifballz-d44d9.firebaseio.com",
        projectId: "gifballz-d44d9",
        storageBucket: "gifballz-d44d9.appspot.com",
        messagingSenderId: "1046486658050"
        };
        firebase.initializeApp(config);
    };

    render() {
        return (
        //html syntax goes here, use react-bootstrap ;) */
        );
    }

};



export default Chat;