import React,{Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';


import Router from './Router';

    
class App extends Component{

    componentWillMount(){
          // Initialize Firebase
          console.disableYellowBox = true;
          
        var config = {
            apiKey: "AIzaSyDVNOlDdT7NE6HG74CS3gI_3QeVoPaIhJA",
            authDomain: "fitech-4545c.firebaseapp.com",
            databaseURL: "https://fitech-4545c.firebaseio.com",
            projectId: "fitech-4545c",
            storageBucket: "fitech-4545c.appspot.com",
            messagingSenderId: "1006950825105"
        };
        firebase.initializeApp(config);
    }
    render(){    

        return (
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <Router />
            <MainNavigator />
            </Provider>
        );
    }
}

export default App;