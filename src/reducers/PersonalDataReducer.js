import {
   PERSONAL_DATA_UPDATE,
   PERSONAL_DATA_FETCH_SUCCESS,
   PERSONAL_DATA_CREATE,
   PERSONAL_DATA_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE ={
    gender:'',
    age:'',
    height:'',
    weight:'',
    neckCircumference:'',
    abdomenCircumference:'',
    weight_goal:'',
    time_goal:''
};

export default(state =INITIAL_STATE, action) =>{
    switch(action.type){
        case PERSONAL_DATA_CREATE:
            return INITIAL_STATE;
        case PERSONAL_DATA_UPDATE:
            return {...state,[action.payload.prop]:action.payload.value}
        case PERSONAL_DATA_FETCH_SUCCESS:
            return action.payload;
        case PERSONAL_DATA_SAVE_SUCCESS:
            return {...state} 
        default:
            return state;
    }
}