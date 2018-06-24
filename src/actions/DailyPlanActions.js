import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import {
    DAILY_PLANUP_DATE,
    DAILY_PLAN_SAVE,
    DAILY_PLAN_SAVE_SUCCESS,
    DAILY_PLAN_FETCH_SUCCESS,
    DAILY_PLAN_CREATE,
    DAILY_PLAN_UPDATE

}from './types';


export const dailyPlanUpdate=({prop,value})=>{
    return {
        type:DAILY_PLAN_UPDATE,
        payload:{prop,value}
    }
}

export const dailyPlanFetch=()=>{
    const {currentUser} = firebase.auth();
    return(dispatch)=>{
        firebase.database().ref('/users/'+currentUser.uid+'/dailyPlan')
        .on('value',snapshot=>{
            console.log("blablablabla")
            if(snapshot.val()){
                dispatch({type:DAILY_PLAN_FETCH_SUCCESS,payload:snapshot.val()}) 
            }else{
                dispatch({type:DAILY_PLAN_CREATE})
            }
        });
    }
}

export const dailyPlanSave = ({foodRequestsList,
    excerciseRequestForCPAS,
    foodStyle,
    lifeStyleForActConsumption}) =>{
        const {currentUser} = firebase.auth();
        return(dispatch)=>{
            let temp = foodRequestsList.split("|");
            let foodListArray = [];
            for (foodItem of temp){
                let currentFood = {}
                currentFood.foodName = foodItem.split(",")[0]
                currentFood.quant = foodItem.split(",")[1]
                foodListArray.push(currentFood);
            }

             temp = excerciseRequestForCPAS.split("|");
            let excerciseRequestForCPASArray = [];
            for (excercise of temp){
                let currentExcise = {}
                currentExcise.foodName = excercise.split(",")[0]
                currentExcise.quant = excercise.split(",")[1]
                excerciseRequestForCPASArray.push(currentExcise);
            }

            firebase.database().ref('/users/'+currentUser.uid+"/dailyPlan")
            .set({       
                foodRequestsList,
                excerciseRequestForCPAS,
                foodStyle,
                lifeStyleForActConsumption
            })
                .then(()=>{
                    let recommendations = {
                        aerobicRec:{
                            excercise:{
                                name:"pushup"
                            }
                        }
                    }
                        dispatch({type:DAILY_PLAN_SAVE_SUCCESS,payload:recommendations})
                        Actions.recommendations();
                        
                    
                    // dispatch({type:DAILY_PLAN_SAVE_SUCCESS});
                 })
        }

    }