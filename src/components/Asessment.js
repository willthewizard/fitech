import React,{Component} from 'react';
import {Picker,Text,View} from 'react-native';
import {connect} from 'react-redux';
import {asessmentDataFetch} from '../actions';
import {Card,CardSection,Input,Button} from './common';


class Asessment extends Component{
    componentWillMount(){
        this.props.personalDataFetch()
    }
    render(){
        return(
            <View>
                <CardSection>
                    {'BMI:' + this.props.bmi}
                </CardSection>

            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    const {name,phone,shift} = state.employeeForm;
    const {
        bmi,
        bodyFat,
        baseMetabolicRate,
        bodyAge
    } = state.asessment
        return {
            bmi,
            bodyFat,
            baseMetabolicRate,
            bodyAge
        }
}

export default connect(mapStateToProps, {asessmentDataFetch})(Asessment);