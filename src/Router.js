import React from 'react';
import {Scene, Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import PersonalData from './components/PersonalData';
import Asessment from './components/Asessment';

const RouterComponent = ()=>{
    return (
        <Router>
            <Scene key ="root" hideNavBar>
                <Scene key = "auth">
                    <Scene key="login" component={LoginForm} title ="Please Login" initial />
                </Scene>
                <Scene key ="main" rightTitle="Add" onRight={()=>Actions.employeeCreate()} >
                    <Scene key ="employeeList" component={EmployeeList} title ="Employees"/>
                    <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
                    <Scene key="employeeEdit" title="Edit Employee" component={EmployeeEdit} />
                </Scene>
                <Scene key = "profile">
                    <Scene key ="personalDataSave" component={PersonalData} title="Personal Data" />
                    <Scene key = "asessment" component = {Asessment} title = "Asessment" /> 
                </Scene>
             </Scene>
        </Router>
    );
}

export default RouterComponent;