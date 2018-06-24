import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import PersonalDataReducer from './PersonalDataReducer';
import AsessmentReducer from './AsessmentReducer';
import DailyPlanReducer from './DailyPlanReducer';
import AdvisorReducer from './AdvisorReducer';

export default combineReducers({
    auth:AuthReducer,
    employeeForm:EmployeeFormReducer,
    employees:EmployeeReducer,
    personalData:PersonalDataReducer,
    asessment:AsessmentReducer,
    dailyPlan:DailyPlanReducer,
    advisor:AdvisorReducer

});