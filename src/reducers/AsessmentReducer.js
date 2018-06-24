import {ASESSMENT_DATA_FETCH,
    ASESSMENT_DATA_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE ={
    bmi:'',
    bfr:''
}
export default(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ASESSMENT_DATA_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}