import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
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
            var foodListArray = [];
            for (foodItem of temp){
                let currentFood = {}
                currentFood.foodName = foodItem.split(",")[0].toLowerCase()
                currentFood.quant = +foodItem.split(",")[1].toLowerCase()
                foodListArray.push(currentFood);
            }

             temp = excerciseRequestForCPAS.split("|");
            var excerciseRequestForCPASArray = [];
            for (excercise of temp){
                let currentExcise = {}
                currentExcise.name = excercise.split(",")[0].toLowerCase()
                currentExcise.durationInMin = +excercise.split(",")[1].toLowerCase()
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
                
            firebase.database().ref('/users/'+currentUser.uid+'/personalData')
            .on('value',snapshot=>{
                let personal = snapshot.val();

                    let timeofday = "";
                    
                    switch(foodStyle){
                        case foodStyle.startsWith("A"):
                            foodStyle = "average"
                        default:
                            foodStyle = "high protein"
                    }
                    
                    if (!(personal.gender.startsWith("M")||personal.gender.startsWith("m"))){
                        personal.gender = false;
                    }else{
                        personal.gender =true;
                    }
                    let input = {
                        
                            abdomen: +personal.abdomenCircumference,
                            age: +personal.age,
                            deltaWeightGoal: ((+personal.weight)-(+personal.weight_goal)),
                            durationOfGoal:+personal.time_goal ,
                            excersieRequestForCPAS:excerciseRequestForCPASArray ,
                            foodRequestLis: foodListArray,
                            foodStyle: foodStyle,
                            height: +personal.height,
                            lifeStyleForActConsumption:lifeStyleForActConsumption ,
                            male: personal.gender,
                            neck: +personal.neckCircumference,
                            time: getTime(),
                            timeStamp: getFormattedDate(),
                            userId: currentUser.uid,
                            weight: +personal.weight
                          
                      }
                      console.log(JSON.stringify(input))
                    axios.post(`http://localhost:3001/fitness/sendModel`, input )
                    .then(res => {
                      console.log(res);
                      console.log(res.data);
                        dispatch({type:DAILY_PLAN_SAVE_SUCCESS,payload:res.data})
                        Actions.recommendations();
                    
                    })
                })
                    // dispatch({type:DAILY_PLAN_SAVE_SUCCESS});
                 })
        }

    }


    function getFormattedDate() {
        var date = new Date();
    
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
    
        month = (month < 10 ? "0" : "") + month;
        day = (day < 10 ? "0" : "") + day;
        hour = (hour < 10 ? "0" : "") + hour;
        min = (min < 10 ? "0" : "") + min;
        sec = (sec < 10 ? "0" : "") + sec;
    
        var str = date.getFullYear() + "-" + month + "-" + day + " " +  hour + ":" + min + ":" + sec+".000";
    
        console.log(str)
    
        return str;
    }

    function getTime() {
        var date = new Date();
    
        var hour = date.getHours();
        
        switch(hour){
            case hour<12:
                return 'morning'
            case hour<18:
                return 'afternoon'
            default:
                return 'evening'
        }

    }