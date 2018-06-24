import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import {ASESSMENT_DATA_FETCH,ASESSMENT_DATA_FETCH_SUCCESS,ASESSMENT_DATA_UPDATE} from './types';
import axios from 'axios';

export const asessmentUpdate=({prop,value})=>{
    return {
        type:ASESSMENT_DATA_UPDATE,
        payload:{prop,value}
    }
}

export const asessmentDataFetch=()=>{
    const {currentUser} = firebase.auth();
    return(dispatch)=>{
        firebase.database().ref('/users/'+currentUser.uid+'/personalData')
        .on('value',snapshot=>{
            console.log("blablablabla")
            if(snapshot.val()){
                let personal = snapshot.val()
                let gender = true;
                if (!(personal.gender.startsWith("M")||personal.gender.startsWith("m"))){
                    gender = false;
                }
                let stuff = {
                    abdomen:(+personal.abdomenCircumference),
                    age: (+personal.age),
                    height: (+personal.height),
                    male: gender,
                    neck: (+personal.height),
                    weight:(+personal.weight) 
                  }
                axios.post(`http://localhost:3001/fitness/metrics`,  stuff )
                .then(res => {
                  console.log(res);
                  console.log(res.data);
                  dispatch({type:ASESSMENT_DATA_FETCH_SUCCESS,payload:res.data}) 
                })
               
            }else{
                dispatch({type:PERSONAL_DATA_CREATE})
            }
        });
    }
}

