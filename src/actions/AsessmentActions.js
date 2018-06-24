import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import {ASESSMENT_DATA_FETCH,ASESSMENT_DATA_FETCH_SUCCESS} from './types';


export const asessmentDataFetch=()=>{
    const {currentUser} = firebase.auth();
    return(dispatch)=>{
        firebase.database().ref('/users/'+currentUser.uid+'/personalData')
        .on('value',snapshot=>{
            console.log("blablablabla")
            if(snapshot.val()){
                let personal = snapshot.val()
                console.log(this.props)
                let stuff = {
                    bmi:(+personal.age)*10,
                    bodyFat:personal.height,
                    baseMetabolicRate:'',
                    bodyAge:''
                }
                dispatch({type:ASESSMENT_DATA_FETCH_SUCCESS,payload:stuff}) 
            }else{
                dispatch({type:PERSONAL_DATA_CREATE})
            }
        });
    }
}