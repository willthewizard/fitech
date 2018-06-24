import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import {
   PERSONAL_DATA_UPDATE,
   PERSONAL_DATA_SAVE,
   PERSONAL_DATA_SAVE_SUCCESS,
   PERSONAL_DATA_FETCH_SUCCESS,
   PERSONAL_DATA_CREATE

}from './types';


export const personalDataUpdate=({prop,value})=>{
    return {
        type:PERSONAL_DATA_UPDATE,
        payload:{prop,value}
    }
}

export const personalDataFetch=()=>{
    const {currentUser} = firebase.auth();
    return(dispatch)=>{
        firebase.database().ref('/users/'+currentUser.uid+'/personalData')
        .on('value',snapshot=>{
            console.log("blablablabla")
            if(snapshot.val()){
                dispatch({type:PERSONAL_DATA_FETCH_SUCCESS,payload:snapshot.val()}) 
            }else{
                dispatch({type:PERSONAL_DATA_CREATE})
            }
        });
    }
}

export const personalDataSave = ({gender,
    age,
    height,
    weight,
    neckCircumference,
    abdomenCircumference,
    weight_goal,
    time_goal}) =>{

        const {currentUser} = firebase.auth();
        return(dispatch)=>{
            firebase.database().ref('/users/'+currentUser.uid+"/personalData")
            .set({gender,
                age,
                height,
                weight,
                neckCircumference,
                abdomenCircumference,
                weight_goal,
                time_goal})
                .then(()=>{

                    // dispatch({type:PERSONAL_DATA_SAVE_SUCCESS});
                    Actions.asessment();
                })
        }

    }