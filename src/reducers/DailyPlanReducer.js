import {
    DAILY_PLAN_UPDATE,
    DAILY_PLAN_FETCH_SUCCESS,
    DAILY_PLAN_CREATE,
    DAILY_PLAN_SAVE_SUCCESS,
    DAILY_RECOMMENDATIONS
 } from '../actions/types';
 
 const INITIAL_STATE ={
foodRequestsList:"",
    excerciseRequestForCPAS:"",
    foodStyle:"",
    lifeStyleForActConsumption:"",
    recommendations:null
 };
 
 export default(state =INITIAL_STATE, action) =>{
     switch(action.type){
         case DAILY_PLAN_CREATE:
             return INITIAL_STATE;
         case DAILY_PLAN_UPDATE:
             return {...state,[action.payload.prop]:action.payload.value}
         case DAILY_PLAN_FETCH_SUCCESS:
             return action.payload;
         case DAILY_PLAN_SAVE_SUCCESS:
             return {...state,recommendations:action.payload}
         default:
             return state;
     }
 }