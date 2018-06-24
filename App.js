import React,{Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

class App extends Component{
    componentWillMount(){
          // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBEu6Y2Nmm58MImqEVbqgPRFK2iRQ1qM3M",
            authDomain: "react-native-manager-8c0ca.firebaseapp.com",
            databaseURL: "https://react-native-manager-8c0ca.firebaseio.com",
            projectId: "react-native-manager-8c0ca",
            storageBucket: "",
            messagingSenderId: "238846818910"
        };
        firebase.initializeApp(config);
    }
    render(){
        return (
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;